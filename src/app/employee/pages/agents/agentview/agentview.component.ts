import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import {MatStepper, StepperOrientation} from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
const ELEMENT_DATA = [
  
  {date: "January 2023", docType: 'Aggrement', DocName: "Aggrement", Signature: 'Aggrement',signBy:'Aggrement',ApprovedBy:'Aggrement'},
  {date: "February 2023", docType: 'Finantial Document', DocName: "Finantial Document", Signature: 'Finantial Document',signBy:'Finantial Document',ApprovedBy:'Finantial Document'},
  {date: "March 2023", docType: 'Commision Structure', DocName: "Commision Structure", Signature: 'Commision Structure',signBy:'Commision Structure',ApprovedBy:'Commision Structure'},
  {date: "April 2023", docType: 'letter', DocName: "letter", Signature: 'letter',signBy:'letter',ApprovedBy:'letter'},
];
@Component({
  selector: 'app-agentview',
  templateUrl: './agentview.component.html',
  styleUrls: ['./agentview.component.scss']
})
export class AgentviewComponent implements OnInit {
  loader=false
  currentFile?: File;
  progress = 0;
  message = '';
  areacode1='';
  areacode2='';
  isLinear = true;
  policyAgree=false
  countrystatus=false
  @ViewChild('stepper', { static: false }) private myStepper: MatStepper;
  fileName = 'Select File';
  fileInfos?: Observable<any>;
  counselor=false;
  companydetailsSubmit=false
  maincontactDetailsSubmit=false
  companyoverviewDetailsSubmit=false
  bankDetailsSubmit=false
  referenceDetailsSubmit=false
  // constructor() { }
  mailvalid="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
  // websitevalid="^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?\/?$"
  websitevalid='(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
  // linkedinvalid='http(s)?:\/\/([\w\/in]+\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?'
  linkedinvalid=/https:\/\/in\.linkedin\.com\/[0-9A-Za-z]+\/[0-9A-Za-z]+-[0-9A-Za-z]+-[0-9A-Za-z]+/i
  // facebookvalid='(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\\-\\.]*\/)*([\w\\-\\.]*)'
  // twittervalid='(https:\/\/twitter.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))'
  // instagramvalid='(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)'
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
  companyDetailsForm:FormGroup
  companyMainContactForm:FormGroup
  companyOverviewForm:FormGroup
  bankDetailsForm:FormGroup
  referencesForm:FormGroup
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  ngOnInit(): void {
    
    //First form in stepper
  this.companyDetailsForm = this._formBuilder.group({
    Doing_Bussiness_as:['',Validators.nullValidator],
    Address_Line_1:['',Validators.required],
    Address_Line_2:['',Validators.nullValidator],
    City:['',Validators.required],
    State:['',Validators.required],
    Country:['India'],
    pincode:['',[Validators.required,Validators.pattern('^[1-9][0-9]{5}$')]],
    company_phone_number:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    Website:['',Validators.required],
    Company_email_address:['',Validators.required],
    Linked_IN:['',[Validators.required, Validators.pattern("^(http(s)?:\/\/)?((www\.)?|(in\.)?)linkedin\.com\/(company\/[a-zA-Z0-9_-]+|in\/[a-zA-Z0-9_-]+[-\w]*)\/?$")]],
    Twitter: ['',[Validators.required, Validators.pattern("^(http(s)?:\/\/)?(www\.)?twitter\.com\/[a-zA-Z0-9_]{1,15}\/?$")]],
    FB_page: ['',[Validators.required,Validators.pattern("/^(http(s)?:\/\/)?(www\.)?facebook\.com\/([a-zA-Z0-9\.]+)\/?$")]],
    Instagram: ['',[Validators.required,Validators.pattern("^(http(s)?:\/\/)?(www\.)?instagram\.com\/([a-zA-Z0-9_\.]+)\/?$")]]
  });


  //second form in stepper
  this.companyMainContactForm = this._formBuilder.group({
    Title: ['', Validators.required],
    First_Name:['',Validators.required],
    Last_Name:['',Validators.required],
    Job_Title:['',Validators.required],
    Email_Address:['',Validators.required],
    // Confirm_Email_Address:['',Validators.required],
    Business_Owner_Contact_Number:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    Business_Owner_Email:['',Validators.required],
    Linked_In_Profile:['',[Validators.required, Validators.pattern("^(http(s)?:\/\/)?((www\.)?|(in\.)?)linkedin\.com\/(company\/[a-zA-Z0-9_-]+|in\/[a-zA-Z0-9_-]+[-\w]*)\/?$")]],
    });


  //Third form in stepper
  this.companyOverviewForm = this._formBuilder.group({
    Business_Founded: ['', Validators.required],
    Registration: ['', Validators.nullValidator],
    state: ['', Validators.required],
    experience: ['', Validators.required],

    // registration_Certificate:['',Validators.required], //certificate image uploading
    // counsellconfirm: ['', Validators.required],
    // counsellor: ['', Validators.required],
    // How_many_years_of_experience_do_you_have_in_the_international_education_recruitment_industry:['', Validators.required],
    // Countries_your_company_recruits_students:['',Validators.required],
    // Total_number_of_students_enrolled_in_last_12_months:['',[Validators.required, Validators.pattern("^([1-9][0-9]{0,2})$")]],
    // Enter_the_VISA_success_rate:['',[Validators.required, Validators.pattern("^([1-9]|[1-9][0-9]|100{0,1})$")]],
    // Total_number_of_potential_students_in_the_next_12_months:['',[Validators.required, Validators.pattern("^[0-9]*$")]]
    
    // countrySelection:['', Validators.required],
    // Australia:new FormGroup({
    //   students12Months:new FormControl('',Validators.required),
    //   visaSuccessRate:new FormControl('',Validators.required),
    //   potentialStudents12Months:new FormControl('',Validators.required),
    // }),
    // canada:new FormGroup({
    //   students12Months:new FormControl('',Validators.required),
    //   visaSuccessRate:new FormControl('',Validators.required),
    //   potentialStudents12Months:new FormControl('',Validators.required),
    // }),
    // usa:new FormGroup({
    //   students12Months:new FormControl('',Validators.required),
    //   visaSuccessRate:new FormControl('',Validators.required),
    //   potentialStudents12Months:new FormControl('',Validators.required),
    // }),
    // uk:new FormGroup({
    //   students12Months:new FormControl('',Validators.required),
    //   visaSuccessRate:new FormControl('',Validators.required),
    //   potentialStudents12Months:new FormControl('',Validators.required),
    // }),
    // other:new FormGroup({
    //   otherCountries:new FormControl('',Validators.required),    
    // })
  });


  //Fourth form in stepper
  this.bankDetailsForm = this._formBuilder.group({
    Bank_Account_Name: ['', Validators.required],
    Account_Number: ['', Validators.required],
    Bank_Name: ['', Validators.required],
    Bank_Branch: ['', Validators.required],
    IFSC_Code: ['', Validators.required],
    IBAN_Code: ['', Validators.required],
    Swift_Code: ['', Validators.required],
  });


  //Fifth form in stepper
  this.referencesForm = this._formBuilder.group({
    First_Name_and_Last_Name: ['', Validators.required],
    Referee_Designation: ['', Validators.required],
    Name_Of_Institution: ['', Validators.required],
    Country: ['', Validators.required],
    Preferrend_Contact_Number: ['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    Email_address: ['', Validators.required]
  });

  }
  stepperOrientation: Observable<StepperOrientation>;
  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver,private toastrService: ToastrService,private _snackBar: MatSnackBar,public dialog: MatDialog,private _router:Router) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
     
  }

  get f() { return this.companyDetailsForm.controls; }
  get s() { return this.companyMainContactForm.controls; }
  get t() { return this.companyOverviewForm.controls; }
  get fo() { return this.companyOverviewForm.controls; }
  get fi() { return this.companyOverviewForm.controls; } 

  onchecked()
  {
    this.policyAgree=(this.policyAgree)? false : true;
  }
 
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
  //area code for second mobile number
  onCountryChange1(event:any)
  {
    this.areacode2=event.dialCode
  }
  
  displayedColumns: string[] = ['Date', 'DocType', 'DocName', 'Signature','signBy','ApprovedBy'];
  dataSource = ELEMENT_DATA;
}
