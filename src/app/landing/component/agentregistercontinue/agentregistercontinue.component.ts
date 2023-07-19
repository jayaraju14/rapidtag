import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  Router } from '@angular/router';
import { RegistrationService } from 'src/app/_services/registration.service';

@Component({
  selector: 'app-agentregistercontinue',
  templateUrl: './agentregistercontinue.component.html',
  styleUrls: ['./agentregistercontinue.component.scss']
})
export class AgentregistercontinueComponent implements OnInit {
email:any
loader=false
  constructor(private userService:RegistrationService,private _router:Router ,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  sendOTP()
  {
    this.loader=true
    this.userService.AgentReqOtp(this.email).subscribe((result)=>{
      if(result.message='OTP successfully sent to your email'){
        // localStorage.setItem("mail",this.email)
        sessionStorage.setItem("mail",this.email)
        this.loader=false
        this._router.navigateByUrl('/agent-otp-verify')
      }
      else
      {
        console.log("error")  
      }
    },(error)=>{
      if(error.error.message="Account does not exist")
      {
          this._snackBar.open('Email Not registred with TAG.', 'x', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
          
        });
        this.loader=false
      }
      // console.log(error.error.message)
      }
    )
  }
}
