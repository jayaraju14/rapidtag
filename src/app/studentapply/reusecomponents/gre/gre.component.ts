import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-gre',
  templateUrl: './gre.component.html',
  styleUrls: ['./gre.component.scss']
})
export class GreComponent implements OnInit {
  selectedDate: Date | null;
  fileName = 'upload';
  currentFile?: File;
  studentData:any
  GREForm:FormGroup
  constructor(public dialogRef: MatDialogRef<GreComponent>,
    private _studentService:StudentService,
    private _formbuilder:FormBuilder) { 
      this.GREForm=this._formbuilder.group({
        Registration_Number:new FormControl('',Validators.required),
        Test_Date:new FormControl('',Validators.required),
        analytical_Write:new FormControl('',Validators.required),
        analytical_Write_Precentage:new FormControl('',Validators.required),
        quantitative_Reasoning:new FormControl('',Validators.required),
        quantitative_Reasoning_Percentage:new FormControl('',Validators.required),
        verbal_Reasoning:new FormControl('',Validators.required),
        verbal_Reasoning_Percentage:new FormControl('',Validators.required)
        // additional_education: this._formbuilder.array([])
      })
    }

  ngOnInit(): void {
    this._studentService.getStudentEducation().subscribe(res=>{
      this.studentData=res
      if(res)
      {
        this.GREForm.patchValue({
          Registration_Number:res.gre_details['Registration Number'],
          Test_Date:res.gre_details['Test Date'],
          analytical_Write:res.gre_details['Analytical Writing'],
          analytical_Write_Precentage:res.gre_details['Analytical Writing Percentile'],
          quantitative_Reasoning:res.gre_details['Quantitative Reasoning'],
          quantitative_Reasoning_Percentage:res.gre_details['Quantitative Reasoning Percentile'],
          verbal_Reasoning:res.gre_details['Verbal Reasoning'],
          verbal_Reasoning_Percentage:res.gre_details['Verbal Reasoning Percentile']
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
  }

  saveData()
  {
    let form=this.GREForm.value
    let data={
      "gre_details": {
          "Test Date": form.Test_Date,
          "Registration Number":form.Registration_Number,
          "Verbal Reasoning": form.verbal_Reasoning,
          "Quantitative Reasoning": form.quantitative_Reasoning,
          "Analytical Writing": form.analytical_Write,
          "Verbal Reasoning Percentile": form.verbal_Reasoning_Percentage,
          "Quantitative Reasoning Percentile": form.quantitative_Reasoning_Percentage,
          "Analytical Writing Percentile": form.analytical_Write_Precentage
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
    this.dialogRef.close();
  }
}