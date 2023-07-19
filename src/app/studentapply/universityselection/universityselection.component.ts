import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl, FormControl, Validators } from '@angular/forms';
import { AgentService } from 'src/app/_services/agent.service';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-universityselection',
  templateUrl: './universityselection.component.html',
  styleUrls: ['./universityselection.component.scss']
})
export class UniversityselectionComponent implements OnInit {
  @Output() nexStep: EventEmitter<any> = new EventEmitter();
  graduate: boolean = false;
  undergraduate: boolean = false;
  uniForm: FormGroup;
  data: any;
  allUniversities:any;

  constructor(private _agentService: AgentService, private formBuilder: FormBuilder,private changeDetectorRef: ChangeDetectorRef,
    private _studentService:StudentService) { }

  ngOnInit(): void {
    
    this.uniForm = this.formBuilder.group({
      selectedLevel:new FormControl('',Validators.nullValidator),
      universities: this.formBuilder.array([])
    });

    this._agentService.getUniversities().subscribe((res) => {
      this.allUniversities = res.data;
    });
    this.changeDetectorRef.detectChanges();
  }

  get uni():FormArray{
    return <FormArray> this.uniForm.get('universities');
  }

  addUniversities()
  {
    const formArray = (this.uniForm.controls.universities as FormArray);
    this.data.forEach((item:any) => {
      formArray.push(this.formBuilder.group({
          name: item.name,
          intake:'',
          course:''
        }));
    })
    console.log(this.uniForm.value)
  }


  submitted()
  {
    let unidata=this.uniForm.value.universities
    const filteredArray = unidata.filter((item:any) => item.intake !== "" && item.course !== "");
    
    // let data={
    //   "selectedUniversities":filteredArray
    // }
  
    this._studentService.updateUniversitySelection(filteredArray,this.uniForm.value.selectedLevel).subscribe(res=>{
      if(res)
      {
        this.nexStep.emit()
      }
    })
    
  }
  
  getUniversity(level: string) {
    if (level === 'undergraduate') {
      this.data=this.allUniversities.filter((result:any)=>result.undergraduation.courses.length!=0)
      this.undergraduate = true;
      this.graduate = false;
      this.addUniversities()
      this.uniForm.get('selectedLevel')?.patchValue('undergraduation')
    } else if (level === 'graduate') {
      this.data=this.allUniversities.filter((result:any)=>result.graduation.courses.length!=0)
      this.undergraduate = false;
      this.graduate = true;
      this.addUniversities();
      this.uniForm.get('selectedLevel')?.patchValue('graduation')
    }
  }
}
