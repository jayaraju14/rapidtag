import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-duolingo',
  templateUrl: './duolingo.component.html',
  styleUrls: ['./duolingo.component.scss']
})
export class DuolingoComponent implements OnInit {
  selectedDate: Date | null;
  fileName = 'upload';
  currentFile?: File;
  IELTSForm:FormGroup
  studentData:any
  constructor(public dialogRef: MatDialogRef<DuolingoComponent>,
    private _formbuilder:FormBuilder,
    private _studentService:StudentService) { 
    
    this.IELTSForm=this._formbuilder.group({
      Date:new FormControl('',Validators.required),
      Comprehension:new FormControl('',Validators.required),
      Conversation:new FormControl('',Validators.required),
      Literacy:new FormControl('',Validators.required),
      Overall:new FormControl('',Validators.required),
      Production:new FormControl('',Validators.required),
      certs:new FormControl('',Validators.required)
    })

  }

  ngOnInit(): void {

    this._studentService.getStudentEducation().subscribe(res=>{
      this.studentData=res
      if(res)
      {
        this.IELTSForm.patchValue({   
          Date:res.duolingo_details['Date'],
          Comprehension:res.duolingo_details['Comprehensio n'],
          Conversation:res.duolingo_details['Conversation'],
          Literacy:res.duolingo_details['Literacy'],
          Overall:res.duolingo_details['Overall'],
          Production:res.duolingo_details['Production'],
          certs:res.duolingo_details['certs']
        })
      }
      
      // console.log(this.studentData.gre_details)
    })

  }

  onSelect(event:any){
    console.log(event);
    this.selectedDate= event;
  }
  selectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
      this.fileName = this.currentFile.name;
    } else {
      this.fileName = 'Select File';
    }
    // if(this.currentFile)
    // {
    //   this.epssection=true
    // }
    
  }
  saveData()
  {
    let form=this.IELTSForm.value
    let data={
      "duolingo_details": {
        "Date":form.Date,
        "Comprehensio n":form.Comprehension,
        "Conversation":form.Conversation,
        "Literacy":form.Literacy,
        "Overall":form.Overall,
        "Production":form.Production,
        "certs":form.certs
      }
      }
   if(data)
   {
    this._studentService.updatestudentEducation(data).subscribe(res=>{
    if(res)
    {
      this.dialogRef.close();
    }
    })
   }
  }
  closeDialog() {
    this.dialogRef.close({ event: 'close', data: "ielts" });
  }
}
