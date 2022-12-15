import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-agentregistrationdetails',
  templateUrl: './agentregistrationdetails.component.html',
  styleUrls: ['./agentregistrationdetails.component.scss']
})
export class AgentregistrationdetailsComponent implements OnInit {
  currentFile?: File;
  progress = 0;
  message = '';

  fileName = 'Select File';
  fileInfos?: Observable<any>;
  counselor=false;
  // constructor() { }
  mailvalid="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
  // websitevalid="/(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi"
  websitevalid='(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
  nameTitle=[{"value":"Mr"},{"value":"Miss"},{"value":"Dr"},{"value":"Prof"},{"value":"Ms"},{"value":"Mrs"}]
  yearlist=[1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022]
  states=["Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal"
  ]

  countries: Array<any> = [
    { name: 'Australia', value: 'Australia' },
    { name: 'Canada', value: 'Canada' },
    { name: 'USA', value: 'USA' },
    { name: 'UK', value: 'UK' },
    { name: 'Other', value: 'Other' }
  ];
  ngOnInit(): void {
    
  }



  //First form in stepper
  companyDetailsForm = this._formBuilder.group({
    companyname: ['', Validators.required],
    Doing_Business_as:['',Validators.required],
    Address_Line_1:['',Validators.required],
    Address_Line_2:['',Validators.required],
    City:['',Validators.required],
    State:['',Validators.required],
    Country:['',Validators.required],
    pincode:['',Validators.required],
    company_phone_number:['',Validators.required],
    Website:['',Validators.required],
    Company_email_address:['',Validators.required],
    Linked_IN:['',Validators.required],
    Twitter: ['', Validators.required],
    FB_page: ['', Validators.required],
    Instagram: ['', Validators.required],
    // areacode: ['', Validators.required],
  });


  //second form in stepper
  companyMainContactForm = this._formBuilder.group({
    Title: ['', Validators.required],
    First_Name:['',Validators.required],
    Last_Name:['',Validators.required],
    Job_Title:['',Validators.required],
    Email_Address:['',Validators.required],
    Business_Owner_Contact_Number:['',Validators.required],
    Business_Owner_Email:['',Validators.required],
    Linked_In_Profile:['',Validators.required],
    // areacode: ['', Validators.required],
  });


  //Third form in stepper
  companyOverviewForm = this._formBuilder.group({
    Year_Business_Founded: ['', Validators.required],
    Registration: ['', Validators.required],
    State_Of_Incorporation: ['', Validators.required],
    registration_Certificate:['',Validators.required],
    counsellconfirm: ['', Validators.required],
    counsellor: ['', Validators.required],
    experiance:['', Validators.required],
    countrySelection:['', Validators.required],
    // checkArray: this._formBuilder.array([])
  });


  //Fourth form in stepper
  bankDetailsForm = this._formBuilder.group({
    bank_account_name: ['', Validators.required],
    bank_account_number: ['', Validators.required],
    bank_name: ['', Validators.required],
    bank_branch: ['', Validators.required],
    IFSC: ['', Validators.required],
    IBAN: ['', Validators.required],
    SWIFT: ['', Validators.required],
  });


  //Fifth form in stepper
  referencesForm = this._formBuilder.group({
    fullName: ['', Validators.required],
    refereeDesignation: ['', Validators.required],
    institutionName: ['', Validators.required],
    country: ['', Validators.required],
    contactNumber: ['', Validators.required],
    emailAddress: ['', Validators.required]
  });




  //stepper responsive
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  get f() { return this.companyDetailsForm.controls; }
  get s() { return this.companyMainContactForm.controls; }
  get t() { return this.companyOverviewForm.controls; }
  get fo() { return this.companyOverviewForm.controls; }
  get fi() { return this.companyOverviewForm.controls; }



  onCountryChange(event:any)
  {
console.log(event)
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



  //
  selectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
      this.fileName = this.currentFile.name;
    } else {
      this.fileName = 'Select File';
    }
    console.log(this.fileName)
  }

  
//cousileer yes/no option
  consi()
  {
    console.log(this.companyOverviewForm.value.counsellconfirm)
    if(this.companyOverviewForm.value.counsellconfirm=="yes")
    {
this.counselor=true
    }
    else{
      this.counselor=false
    }
  }

//check boxes
  onCheckboxChange(e:any) {
    const checkArray: FormArray = this.companyOverviewForm.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  
  companySubmit()
  {
    console.log(this.companyDetailsForm.value)
  }
}