import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-ielts',
  templateUrl: './ielts.component.html',
  styleUrls: ['./ielts.component.scss']
})
export class IeltsComponent implements OnInit {
  selectedDate: Date | null;
  fileName = 'upload';
  currentFile?: File;
  IELTSForm:FormGroup
  studentData:any
  constructor(public dialogRef: MatDialogRef<IeltsComponent>,
    private _formbuilder:FormBuilder,
    private _studentService:StudentService) { 
    
    this.IELTSForm=this._formbuilder.group({
      Candidate_ID:new FormControl('',Validators.required),
      Date:new FormControl('',Validators.required),
      Level:new FormControl('',Validators.required),
      Candidate_Number:new FormControl('',Validators.required),
      // Date:new FormControl('',Validators.required),
      Centre_Number:new FormControl('',Validators.required),
      Listening:new FormControl('',Validators.required),
      Reading:new FormControl('',Validators.required),
      Writing:new FormControl('',Validators.required),
      Speaking:new FormControl('',Validators.required),
      Score:new FormControl('',Validators.required)
      // additional_education: this._formbuilder.array([])
    })

  }

  ngOnInit(): void {

    this._studentService.getStudentEducation().subscribe(res=>{
      this.studentData=res
      if(res)
      {
        this.IELTSForm.patchValue({
          Candidate_ID:res.ielts_details['Candidate ID'],
          Date:res.ielts_details['Date'],
          Level:res.ielts_details['Level'],
          Candidate_Number:res.ielts_details['Candidate Number'],
          Centre_Number:res.ielts_details['Centre Number'],
          Listening:res.ielts_details['Listening'],
          Reading:res.ielts_details['Reading'],
          Writing:res.ielts_details['Writing'],
          Speaking:res.ielts_details['Speaking'],
          Score:res.ielts_details['Score']
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
      "ielts_details": {
        "Centre Number": form.Centre_Number,
        "Date": form.Date,
        "Candidate Number": form.Candidate_Number,   
        "Listening": form.Listening,
        "Reading": form.Reading,
        "Writing": form.Writing,
        "Speaking": form.Speaking,
        "Score": form.Score,
        "Level": form.Level,
        "Candidate ID": form.Candidate_ID
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
