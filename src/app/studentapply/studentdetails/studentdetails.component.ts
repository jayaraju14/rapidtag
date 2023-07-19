import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.scss']
})
export class StudentdetailsComponent implements OnInit {
  @Output("nexStep") nexStep: EventEmitter<any> = new EventEmitter();
  diffmailenable: boolean = false;
  constructor( private _formbuilder:FormBuilder,private _studentService:StudentService) { }
  
  mailvalid="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
  areacode1=''
  months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  formsubmit=false
  StudentDetailsForm=this._formbuilder.group({
    passportNumber:new FormControl('',Validators.required),
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    contact:new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    gender:new FormControl('',Validators.required),
    dob:new FormControl('',Validators.required),
    nationality:new FormControl('',Validators.required),
    primary_Citizenship:new FormControl('',Validators.required),
    citizenship_Status:new FormControl('',Validators.required),
    countryOfBirth:new FormControl('',Validators.required),
    cityOfBirth:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    address2:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    state:new FormControl('',Validators.required),
    postal:new FormControl('',Validators.required),
    different_address1:new FormControl('',Validators.nullValidator),
    different_address2:new FormControl('',Validators.nullValidator),
    different_city:new FormControl('',Validators.nullValidator),
    different_state:new FormControl('',Validators.nullValidator),
    different_postal:new FormControl('',Validators.nullValidator),
    emerFirstName:new FormControl('',Validators.required),
    emerLastName:new FormControl('',Validators.required),
    emerContact:new FormControl('',Validators.required),
    yearsOfExperiance:new FormControl('',Validators.required),
    EEmployer:new FormControl('',Validators.required),
    EfromMonth:new FormControl('',Validators.required),
    EfromYear:new FormControl('',Validators.required),
    EtoMonth:new FormControl('',Validators.required),
    EtoYear:new FormControl('',Validators.required),
    EhoursPerWeek:new FormControl('',Validators.required)
  })

  ngOnInit(): void {
    
    this._studentService.studentBasicDetails().subscribe(res=>{
      if(res)
      {
        this.StudentDetailsForm.patchValue({
          passportNumber:res['Passport No'],
          firstName:res['Given Name(s)'],
          lastName:res['Surname'],
          email:res['email'],
          contact:res['contact'],
          gender:res['Sex'],
          // dob:res['Date of Birth'],
          dob:'21/06/2023',
          nationality:res['Nationality'],
          countryOfBirth:res['Place of Birth']
        });
      }
      // console.log(res)
    })
  }
  get f() { return this.StudentDetailsForm.controls; }

  onCountryChange(event:any)
  {
    this.areacode1=event.dialCode
  }
  telInputObject(event:any)
  {
    console.log("two")
  }
  getNumber(event:any)
  {
    console.log("three")
  }
  hasError(event:any)
  {
    console.log("four")
  }
  enableDiffMail(event:any)
  {
    // console.log(event.value)
    if(event.value=="yes")
    {   
      this.diffmailenable=true
    }else{
      this.diffmailenable=false
    }
  }
  submit(){
    this.formsubmit=true
    if(this.StudentDetailsForm.valid)
    {
     let form=this.StudentDetailsForm.value
     let data={
      "Passport No":form.passportNumber,
      "Given Name(s)":form.firstName,
      "Surname":form.lastName,
      "email":form.email,
      "Sex":form.gender,
      "Date of Birth":form.dob,
      "Nationality":form.nationality,
      primary_Citizenship:form.primary_Citizenship,
      citizenship_Status:form.citizenship_Status,
      "Place of Birth":form.countryOfBirth,
      cityOfBirth:form.cityOfBirth,
      address:form.address,
      address2:form.address2,
      city:form.city,
      state:form.state,
      postal:form.postal,
      different_address1:form.different_address1,
      different_address2:form.different_address2,
      different_city:form.different_city,
      different_state:form.different_state,
      different_postal:form.different_postal,
        emerFirstName:form.emerFirstName,
        emerLastName:form.emerLastName,
        emerContact:form.emerContact,
        yearsOfExperiance:form.yearsOfExperiance,
        EEmployer:form.EEmployer,
        EfromMonth:form.EfromMonth,
        EfromYear:form.EfromYear,
        EtoMonth:form.EtoMonth,
        EtoYear:form.EtoMonth,
        EhoursPerWeek:form.EhoursPerWeek        
      }
    this._studentService.updateStudentDetails(data).subscribe(res=>{
      if(res)
      {
        this.nexStep.emit()
      }
    },(error)=>{
      console.log(error)
    })
    }
  }
  // nextstep()
  // {
  
  // }
}
