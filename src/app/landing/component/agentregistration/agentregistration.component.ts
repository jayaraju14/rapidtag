import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegistrationService } from 'src/app/_services/registration.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-agentregistration',
  templateUrl: './agentregistration.component.html',
  styleUrls: ['./agentregistration.component.scss']
})
export class AgentregistrationComponent implements OnInit {
  loader=false
  policyAgree=false
  mailvalid="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" //email validation pattern
  submitted=false
  
    regForm:FormGroup;
    constructor(private fb:FormBuilder,private userService:RegistrationService ,private _router:Router,private toastrService: ToastrService,private _snackBar: MatSnackBar) { 
      this.regForm=fb.group({
        first_name : new FormControl('', [Validators.required]),
        last_name : new FormControl('', [Validators.required]),
        company_name : new FormControl('', [Validators.required]),
        email : new FormControl('', [Validators.required, Validators.email]),
        consent:new FormControl('false')
      })  
    }
    
    get f() { return this.regForm.controls; }
  
    ngOnInit(): void {
    }
  
    onchecked()
    {
      this.policyAgree=(this.policyAgree)? false : true;
    }
  
    register(regForm:any)
    {
      let result
      let err
      this.submitted=true
      if(this.regForm.valid)
        {
          
          if(this.policyAgree==true)
          {
            this.loader=true
                this.userService.postAgent_User(this.regForm.value).subscribe((result)=>{
                 
                  if(result.message='OTP successfully sent to your email'){
                    this.loader=false
                    // localStorage.setItem("mail",regForm.value.email)
                    sessionStorage.setItem("mail",regForm.value.email)
                    this._router.navigateByUrl('/agent-otp-verify')
                  }
                  else
                  {
                    console.log("error")  
                  }
                },(error)=>{
                  if(error.statusText='Conflict')
                  {
                      this._snackBar.open('Email already registred with TAG.Please click on Continue', 'x', {
                      duration: 3000,
                      verticalPosition: 'top',
                      horizontalPosition: 'center'
                    });
                    this.loader=false
                  }
                  // console.log(error)
                }
                )
              }
          else{
              this._snackBar.open('please accept tag privacy', 'x', {
                duration: 3000,
                verticalPosition: 'top',
                horizontalPosition: 'center'
              });
          }
        }
      
        
        
  
    }
  }
  
