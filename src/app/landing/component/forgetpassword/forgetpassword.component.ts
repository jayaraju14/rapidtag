import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { AuthService } from 'src/app/_services/auth.service';
import { RegistrationService } from 'src/app/_services/registration.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgetpwdForm:FormGroup
  sendOtp=true
  confirmotp=false
  submitpwd=false
  previousUrl:any
  constructor(private _formbuilder:FormBuilder,
    private _registraionservice:RegistrationService,
    private _authservice:AuthService,
    private _router:Router,
    private location: Location) { }

  ngOnInit(): void {
    this.forgetpwdForm=this._formbuilder.group({
      email:new FormControl(''),
      otp:new FormControl(''),
      password:new FormControl(''),
      confirmpwd:new FormControl('')
    })
    
    
  }

  sendOTP()
  {
    // console.log(this.forgetpwdForm.value)
    this._registraionservice.AgentReqOtp(this.forgetpwdForm.value.email).subscribe(res=>{
      if(res)
      {
        console.log(res)
        
        this.sendOtp=false
        this.confirmotp=true
        // localStorage.setItem('mail',this.forgetpwdForm.value.email)
        sessionStorage.setItem('mail',this.forgetpwdForm.value.email)
      }
    })
  }
  submitotp()
  {
    this._registraionservice.VerifyOtp(this.forgetpwdForm.value.otp).subscribe(res=>{
      if(res)
      {
        console.log(res)
        // localStorage.setItem('access_token',res.access_token)
        sessionStorage.setItem('access_token',res.access_token)
        this.sendOtp=false
        this.confirmotp=false
        this.submitpwd=true
      }
    })
   
  }
  submit()
  {
    let data={
      "password": this.forgetpwdForm.value.password,
      "confirm_password": this.forgetpwdForm.value.confirmpwd
    }
      this._authservice.forgetPassword(data).subscribe(res=>{
        if(res)
        {
          console.log(res)
          // localStorage.clear()
          sessionStorage.clear()
          this.location.back()
        }
      })
  }


}
