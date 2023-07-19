import { Component, Inject, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.scss']
})
export class EmployeeLoginComponent implements OnInit {

  loader=false
  emploginForm:FormGroup
  submitted=false
  mailvalid="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" //email validation pattern
  constructor(private authService: AuthService,private _formBuilder: FormBuilder,private _router:Router) {}
  
  ngOnInit(): void {
    this.emploginForm = this._formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required],
    });
  }

  get f() { return this.emploginForm.controls; }

  empLogin()
  {
    this.submitted=true
    if(this.emploginForm.valid)
    {
      this.loader=true
    this.authService.login(this.emploginForm.value).subscribe(res=>{
      if(res.status=="INVITE_ACCEPTED")
      {
        this.loader=false
        
        this._router.navigate(['/employee']);
      }
    }
    ,(error)=>{
        this.loader=false
        console.log(error.error.message)
    })
  }
  }

}
