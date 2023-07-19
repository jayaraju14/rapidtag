import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-toefl',
  templateUrl: './toefl.component.html',
  styleUrls: ['./toefl.component.scss']
})
export class ToeflComponent implements OnInit {
  selectedDate: Date | null;
  fileName = 'upload';
  currentFile?: File;
  TOEFLForm:FormGroup
  studentData:any
  constructor(public dialogRef: MatDialogRef<ToeflComponent>,
    private _formbuilder:FormBuilder,
    private _studentService:StudentService) { 
    
    this.TOEFLForm=this._formbuilder.group({
      Test_Date:new FormControl('',Validators.required),
      Appointment_Number:new FormControl('',Validators.required),
      // Date:new FormControl('',Validators.required),
      Native_Language:new FormControl('',Validators.required),
      Test_Center:new FormControl('',Validators.required),
      Test_Center_Country:new FormControl('',Validators.required),
      Reading:new FormControl('',Validators.required),
      Listening:new FormControl('',Validators.required),
      Speaking:new FormControl('',Validators.required),
      Writing:new FormControl('',Validators.required),
      total_score:new FormControl('',Validators.required)
      // additional_education: this._formbuilder.array([])
    })

  }

  ngOnInit(): void {

    this._studentService.getStudentEducation().subscribe(res=>{
      this.studentData=res
      if(res)
      {
        this.TOEFLForm.patchValue({
          Test_Date:res.ielts_details['Test_Date'],
          Appointment_Number:res.ielts_details['Appointment Number'],
          Native_Language:res.ielts_details['Native Language'],
          Test_Center:res.ielts_details['Test Center'],
          Test_Center_Country:res.ielts_details['Test Center Country'],
          Reading:res.ielts_details['Reading'],
          Listening:res.ielts_details['Listening'],
          Writing:res.ielts_details['Writing'],
          Speaking:res.ielts_details['Speaking'],
          total_score:res.ielts_details['total score']
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
    let form=this.TOEFLForm.value
    let data={
      "ielts_details": {
        "Test Date": form.Test_Date,
        "Appointment Number": form.Appointment_Number,
        "Native_Language": form.Native_Language,   
        "Test Center": form.Test_Center,
        "Test Center Country": form.Test_Center_Country,
        "Reading": form.Reading,
        "Listening": form.Listening,
        "Writing": form.Writing,
        "Speaking": form.Speaking,
        "total score": form.total_score
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
