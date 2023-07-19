import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loader=false
  isPasswordVisible: boolean = false;
  agentloginForm:FormGroup
  submitted=false
  mailvalid="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" //email validation pattern
  
  constructor(@Inject(AuthService) public authService: AuthService,private _formBuilder: FormBuilder,private _router:Router,private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.agentloginForm = this._formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    });
  }
  get f() { return this.agentloginForm.controls; }
  agentLogin()
  {
    this.submitted=true
    if(this.agentloginForm.valid)
    {
      this.loader=true
    this.authService.login(this.agentloginForm.value).subscribe(res=>{
      if(res)
      {
          if(res.role=="EMPLOYEE")
          {
            this.authService.logout()
            // localStorage.clear()
            sessionStorage.clear()
            this.loader=false
            console.log("please login with your agent credentials")
          }
          else if(res.role=="AGENT" && res.status=="APPROVED")
          {
            this.loader=false
            this._router.navigate(['/agent']);
          }
      }
    }
    ,(error)=>{
      if(error.error.message=="Incorrect Password")
      {
        this.loader=false
        this._snackBar.open('Incorrect Password.', 'x', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      }
    })
  }
  }
  forgetpwd()
  {
    this._router.navigateByUrl('forget-password')
  }
}
