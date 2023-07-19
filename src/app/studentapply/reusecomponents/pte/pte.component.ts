import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-pte',
  templateUrl: './pte.component.html',
  styleUrls: ['./pte.component.scss']
})
export class PteComponent implements OnInit {
  selectedDate: Date | null;
  fileName = 'upload';
  currentFile?: File;
  PTEForm:FormGroup
  studentData:any
  constructor(public dialogRef: MatDialogRef<PteComponent>,
    private _formbuilder:FormBuilder,
    private _studentService:StudentService) { 
    
    this.PTEForm=this._formbuilder.group({
      Test_Taker_ID:new FormControl('',Validators.required),
      Test_Centre_ID:new FormControl('',Validators.required),
      Test_Centre:new FormControl('',Validators.required),
      Date:new FormControl('',Validators.required),
      Country_of_Citizenship:new FormControl('',Validators.required),
      Country_of_Residence:new FormControl('',Validators.required),
      // Date:new FormControl('',Validators.required),
      Test_Centre_Country:new FormControl('',Validators.required),
      
      Valid_Until:new FormControl('',Validators.required),
      // additional_education: this._formbuilder.array([])
    })

  }

  ngOnInit(): void {

    this._studentService.getStudentEducation().subscribe(res=>{
      this.studentData=res
      if(res)
      {
        this.PTEForm.patchValue({
          Test_Taker_ID:res.pte_details['Test Taker ID'],
          Test_Centre_ID:res.pte_details['Test Centre ID'],
          Test_Centre:res.pte_details['Test Centre'],
          Date:res.pte_details['Date'],
          Country_of_Citizenship:res.pte_details['Country of Citizenship'],
          Country_of_Residence:res.pte_details['Country of Residence'],
          Test_Centre_Country:res.pte_details['Test Centre Country'],
          Valid_Until:res.pte_details['Valid Until']
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
    let form=this.PTEForm.value
    let data={
      "pte_details": {
        "Test Taker ID": form.Test_Taker_ID,
        "Test Centre ID": form.Test_Centre_ID,
        "Test Centre": form.Test_Centre,   
        "Date": form.Date,
        "Country of Citizenship": form.Country_of_Citizenship,
        "Country of Residence": form.Country_of_Residence,
        "Test Centre Country": form.Country,
        "Valid Until": form.Valid_Until,
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