import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agentregistration',
  templateUrl: './agentregistration.component.html',
  styleUrls: ['./agentregistration.component.scss']
})
export class AgentregistrationComponent implements OnInit {




  regForm:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.regForm=fb.group({
      first_name : new FormControl('', [Validators.required]),
      last_name : new FormControl('', [Validators.required]),
      company_Name : new FormControl('', [Validators.required]),
      Email_Address : new FormControl('', [Validators.required, Validators.email])
    })
    
  }
  
  get f() { return this.regForm.controls; }

  ngOnInit(): void {
  }

  register(regForm:any)
  {
console.log(this.regForm.value)
  }

}
