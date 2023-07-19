import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  changePasswordForm:FormGroup
  loader=false
  successText=false
  constructor(private _router:Router,private _formBuilder: FormBuilder,private authservice:AuthService) { }

  ngOnInit(): void {
    this.changePasswordForm = this._formBuilder.group({
      old_password:['',Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required]
    });
  }

  passwordChange()
  {
    this.loader=true
    if(this.changePasswordForm.value.password!=this.changePasswordForm.value.confirm_password)
    {
      console.log("confirm password not matched with new password")
    }
    else{
      
      setTimeout(() => {
        this.authservice.passwordChange(this.changePasswordForm.value).subscribe(res=>{
        if(res)
        {
          this.successText=true
          this.loader=false
          this._router.navigateByUrl('/agent/dashboard') 
        }
      },(error)=>{
        this.loader=false
        console.log(error)
      }) 
      }, 5000);
      // console.log(this.changePasswordForm.value)
      
    }
    
  }
}
