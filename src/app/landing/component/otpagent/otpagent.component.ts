import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AgentService } from 'src/app/_services/agent.service';
import { RegistrationService } from 'src/app/_services/registration.service';

@Component({
  selector: 'app-otpagent',
  templateUrl: './otpagent.component.html',
  styleUrls: ['./otpagent.component.scss']
})
export class OtpagentComponent implements OnInit {
  // mail=localStorage.mail
  mail=sessionStorage.mail
  otp:any
  constructor(private userService:RegistrationService 
    ,private _agentService:AgentService,private _router:Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  validateOTP()
  {
    // console.log(this.otp)
   
    this.userService.VerifyOtp(this.otp).subscribe(res=>{
      
      console.log(res)
      if(res.message="OTP verified successfully")
      {

        // localStorage.setItem('access_token',res.access_token)
        sessionStorage.setItem('access_token',res.access_token)
          this._agentService.getSelfData().subscribe(result=>{
            console.log(result.status)
            if(result.status=='APPROVED')
            {
              this._snackBar.open('You are already approved by TAG', 'x', {
                duration: 3000,
                verticalPosition: 'top',
                horizontalPosition: 'center'
              });
              // localStorage.clear()
              sessionStorage.clear()
            }
            else 
            if(result.status=='WAITING_FOR_APPROVAL')
            {
              this._snackBar.open('Agent registration already submitted for approval', 'x', {
                duration: 3000,
                verticalPosition: 'top',
                horizontalPosition: 'center'
              });
              // localStorage.clear()
              sessionStorage.clear()
            } 
            else{
              this._router.navigateByUrl('agent-registerDetails')
            }
          })
        
        
        
        
      }
    },
    (error)=>{
      if(error.error.message='Invalid otp')
      {
          this._snackBar.open('Invalid OTP', 'x', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      }
    })
  }

}

