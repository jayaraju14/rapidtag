import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from 'src/app/_services/student.service';
import { StudentsuccessdialogComponent } from '../studentsuccessdialog/studentsuccessdialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentsubmit',
  templateUrl: './studentsubmit.component.html',
  styleUrls: ['./studentsubmit.component.scss']
})
export class StudentsubmitComponent implements OnInit {

  submitionForm:FormGroup
  formsubmit=false
  constructor(private formBuilder:FormBuilder,
    private _studentService:StudentService,
    public dialog: MatDialog,
    private _router:Router) { }

  ngOnInit(): void {
    this.submitionForm = this.formBuilder.group({
    information_correctness:new FormControl(''),
    data_usage:new FormControl(''),
    email_usage:new FormControl(''),
    acadamic_misconduct:new FormControl(''),
    behaviour_misconduct:new FormControl(''),
    criminal_offance:new FormControl(''),
    declaration:new FormControl(''),
    signature:new FormControl('')
    })
  }
  get f() { return this.submitionForm.controls; }

  submitted()
  {
    this.formsubmit=true
    // console.log(this.submitionForm.value)
    if(this.submitionForm.valid)
    {
      this._studentService.studentApplicationSubmit(this.submitionForm.value).subscribe(res=>{
        if(res)
        {
          const dialogRef = this.dialog.open(StudentsuccessdialogComponent, {                   
            width: '630px',
            panelClass:'icon-outside'
          });
      
          dialogRef.afterClosed().subscribe(result => {
            // localStorage.clear();
            // sessionStorage.clear();
            sessionStorage.removeItem('semail')
            this._router.navigateByUrl('/agent')
          });
        }
      },(error)=>{
        console.log(error)
      })
    }
  }
  
}
