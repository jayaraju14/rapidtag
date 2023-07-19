import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GreComponent } from '../reusecomponents/gre/gre.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from 'src/app/_services/student.service';
import { IeltsComponent } from '../reusecomponents/ielts/ielts.component';
import { ToeflComponent } from '../reusecomponents/toefl/toefl.component';
import { DuolingoComponent } from '../reusecomponents/duolingo/duolingo.component';
import { PteComponent } from '../reusecomponents/pte/pte.component';

@Component({
  selector: 'app-educationdetails',
  templateUrl: './educationdetails.component.html',
  styleUrls: ['./educationdetails.component.scss']
})
export class EducationdetailsComponent implements OnInit {
  @Output("nexStep") nexStep: EventEmitter<any> = new EventEmitter();
  StudentEducationForm:FormGroup
  bacherlorsenable: boolean=false;
  mastersenable: boolean=false;
  selectionchange:any
  studentData:any
  selectedEPS:any
  educationLevel:any
  constructor( private _formbuilder:FormBuilder,
    public dialog: MatDialog,
    private _studentService:StudentService) {
    this.StudentEducationForm=this._formbuilder.group({
      education_level:new FormControl('',Validators.required),
      mastersGroup: this._formbuilder.group({
        // education_level:new FormControl('',Validators.required),
        institute_name:new FormControl('',Validators.required),
        country_of_education:new FormControl('',Validators.required),
        course_studied:new FormControl('',Validators.required),
        start_date:new FormControl('',Validators.required),
        end_date:new FormControl('',Validators.required)
      }),
      bachelorsGroup: this._formbuilder.group({
        // education_level:new FormControl('',Validators.required),
        institute_name:new FormControl('',Validators.required),
        country_of_education:new FormControl('',Validators.required),
        course_studied:new FormControl('',Validators.required),
        start_date:new FormControl('',Validators.required),
        end_date:new FormControl('',Validators.required)
      }),
      interGroup: this._formbuilder.group({
        // education_level:new FormControl('',Validators.required),
        institute_name:new FormControl('',Validators.required),
        country_of_education:new FormControl('',Validators.required),
        course_studied:new FormControl('',Validators.required),
        start_date:new FormControl('',Validators.required),
        end_date:new FormControl('',Validators.required)
      }),
      sscGroup: this._formbuilder.group({
        // education_level:new FormControl('',Validators.required),
        institute_name:new FormControl('',Validators.required),
        country_of_education:new FormControl('',Validators.required),
        course_studied:new FormControl('',Validators.required),
        start_date:new FormControl('',Validators.required),
        end_date:new FormControl('',Validators.required)
      })
    })
   }
  
  // additional_education() : FormArray {  
  //   return this.StudentEducationForm.get("additional_education") as FormArray  
  // }  

  // newEducation_Details(): FormGroup {  
  //   return this._formbuilder.group({  
  //     education_level:new FormControl('',Validators.required),
  //     institute_name:new FormControl('',Validators.required),
  //     country_of_education:new FormControl('',Validators.required),
  //     course_studied:new FormControl('',Validators.required),
  //     start_date:new FormControl('',Validators.required),
  //     end_date:new FormControl('',Validators.required)
  //   })  
  // }  

  // addDetails() {  
  //   this.additional_education().push(this.newEducation_Details());  
  // }  
  ngOnInit(): void {
    this._studentService.getStudentEducation().subscribe(res=>{
      this.studentData=res
      this.selectedEPS=res.english_prof
      this.educationLevel=res.education_level
      console.log(this.studentData)
    })
  }
  submitData()
  {
    let form=this.StudentEducationForm.value
    let data={
      "master": {
        "Institute_name":form.mastersGroup.institute_name,
        "country": form.mastersGroup.country_of_education,
        "course": form.mastersGroup.course_studied,
        "start_date": form.mastersGroup.start_date,
        "end_date": form.mastersGroup.end_date
      },
      "bacherlor": {
        "Institute_name":form.bachelorsGroup.institute_name,
        "country": form.bachelorsGroup.country_of_education,
        "course": form.bachelorsGroup.course_studied,
        "start_date": form.bachelorsGroup.start_date,
        "end_date": form.bachelorsGroup.end_date
      },
      "intermediate": {
        "Institute_name":form.interGroup.institute_name,
        "country": form.interGroup.country_of_education,
        "course": form.interGroup.course_studied,
        "start_date": form.interGroup.start_date,
        "end_date": form.interGroup.end_date
      },
      "ssc": {
        "Institute_name":form.sscGroup.institute_name,
        "country": form.sscGroup.country_of_education,
        "course": form.sscGroup.course_studied,
        "start_date": form.sscGroup.start_date,
        "end_date": form.sscGroup.end_date
      }
      }
   if(data)
   {
    this._studentService.updatestudentEducation(data).subscribe(res=>{
    if(res)
    {
      setTimeout(() => {
        this.nexStep.emit()  
        }, 2000);
    }
  
  })
   }
  }

  leveleducationchange()
  { 
    // console.log(this.StudentEducationForm.value.education_level)
    if(this.StudentEducationForm.value.education_level=="Masters")
    {
      this.bacherlorsenable=false
      this.mastersenable=true
    }
    else{
      this.mastersenable=false
      this.bacherlorsenable=true 
    }
  }


  //ielts popup
  ieltsDialog(): void {
    const dialogRef = this.dialog.open(IeltsComponent, {
      // data: {name: this.name, animal: this.animal},
      height: '600px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // if (result.data == 'ielts') {
      //   this.toeflDialog();
      // }
    });
  }
  //toefl popup
  toeflDialog(): void {
    const dialogRef = this.dialog.open(ToeflComponent, {
      // data: {name: this.name, animal: this.animal},
      height: '600px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // if (result.data == 'toefl') {
      //   this.duolingoDialog();
      // }
    });
  }
  //duolingo popup
  duolingoDialog(): void {
    const dialogRef = this.dialog.open(DuolingoComponent, {
      // data: {name: this.name, animal: this.animal},
      height: '600px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // if (result.data == 'duolingo') {
      //   this.pteDialog();
      // }
    });
  }

  //pte popup
  pteDialog(): void {
    const dialogRef = this.dialog.open(PteComponent, {
      // data: {name: this.name, animal: this.animal},
      height: '600px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // if (result.data == 'pte') {
      //   this.othersDialog();
      // }
    });
  }



//gre popup
greDialog(): void {
  const dialogRef = this.dialog.open(GreComponent, {
    // data: {name: this.name, animal: this.animal},
    height: '600px',
    width: '600px',
  });

  dialogRef.afterClosed().subscribe((result) => {
    // if(result.data=="others")
    // {
    //   this.toeflDialog();
    // }
  });
}





}
