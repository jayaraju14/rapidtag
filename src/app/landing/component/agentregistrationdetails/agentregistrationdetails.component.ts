import { ChangeDetectorRef, Component, NgZone, OnInit, ViewChild } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {MatStepper, StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { RegistrationService } from 'src/app/_services/registration.service';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AgentSuccessdialogComponent } from '../agent-successdialog/agent-successdialog.component';
import { AuthService } from 'src/app/_services/auth.service';
import { AgentService } from 'src/app/_services/agent.service';
// import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

@Component({
  selector: 'app-agentregistrationdetails',
  templateUrl: './agentregistrationdetails.component.html',
  styleUrls: ['./agentregistrationdetails.component.scss']
})
export class AgentregistrationdetailsComponent implements OnInit {
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
  selectedindex:number
  counselor=false;
  companydetailsSubmit=false
  maincontactDetailsSubmit=false
  companyoverviewDetailsSubmit=false
  bankDetailsSubmit=false
  referenceDetailsSubmit=false
  usr_id:any
  lastname:string
  firstname:string
  loggedemail:string
  disabled=true
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
  isOptional = false;
  ngOnInit(): void {



    
    //First form in stepper
  this.companyDetailsForm = this._formBuilder.group({
    doing_business_as:['',Validators.nullValidator],
    address_line_1:['',Validators.required],
    address_line_2:['',Validators.nullValidator],
    city:['',Validators.required],
    state:['',Validators.required],
    country:['India'],
    pincode:['',[Validators.required,Validators.pattern('^[1-9][0-9]{5}$')]],
    company_phone_number:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    website:['',Validators.required],
    company_email_address:['',Validators.required],
    // Linked_IN:['',[Validators.required, Validators.pattern("^(http(s)?:\/\/)?((www\.)?|(in\.)?)linkedin\.com\/(company\/[a-zA-Z0-9_-]+|in\/[a-zA-Z0-9_-]+[-\w]*)\/?$")]],
    // Twitter: ['',[Validators.required, Validators.pattern("^(http(s)?:\/\/)?(www\.)?twitter\.com\/[a-zA-Z0-9_]{1,15}\/?$")]],
    // FB_page: ['',[Validators.required,Validators.pattern("/^(http(s)?:\/\/)?(www\.)?facebook\.com\/([a-zA-Z0-9\.]+)\/?$")]],
    // Instagram: ['',[Validators.required,Validators.pattern("^(http(s)?:\/\/)?(www\.)?instagram\.com\/([a-zA-Z0-9_\.]+)\/?$")]]
    linked_in:['',[Validators.nullValidator]],
    twitter: ['',[Validators.nullValidator]],
    fb_page: ['',[Validators.nullValidator]],
    instagram: ['',[Validators.nullValidator]]
  });


  //second form in stepper
  this.companyMainContactForm = this._formBuilder.group({
    // Title: ['', Validators.required],
    first_name:[''],
    last_name:[''],
    job_title:['',Validators.required],
    email_address:[''],
    // Confirm_Email_Address:['',Validators.required],
    business_owner_contact_number:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    business_owner_email:['',Validators.required],
    // Linked_In_Profile:['',[Validators.required, Validators.pattern("^(http(s)?:\/\/)?((www\.)?|(in\.)?)linkedin\.com\/(company\/[a-zA-Z0-9_-]+|in\/[a-zA-Z0-9_-]+[-\w]*)\/?$")]],
    linked_in_profile:['',Validators.nullValidator]
  });
  

  //Third form in stepper
  this.companyOverviewForm = this._formBuilder.group({
    business_founded_year: ['', Validators.required],
    registration: ['', Validators.nullValidator],
    state_of_incorporation: ['', Validators.required],
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
    bank_account_name: ['', Validators.required],
    account_number: ['', Validators.required],
    bank_name: ['', Validators.required],
    bank_branch: ['', Validators.required],
    ifsc_code: ['', Validators.required],
    iban_code: ['', Validators.nullValidator],
    swift_code: ['', Validators.nullValidator],
  });


  //Fifth form in stepper
  this.referencesForm = this._formBuilder.group({
    first_name_and_last_name: ['', Validators.nullValidator],
    referee_designation: ['', Validators.nullValidator],
    name_of_institution: ['', Validators.nullValidator],
    ref_country: ['', Validators.nullValidator],
    preferrend_contact_number: ['',[Validators.nullValidator, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    ref_email_address: ['', Validators.nullValidator]
  });
  this.cdr.detectChanges();
  this.fetchData()
  }


  //stepper responsive
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private cdr: ChangeDetectorRef,private ngZone: NgZone,private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver,private _registrationservice:RegistrationService,private toastrService: ToastrService,private _snackBar: MatSnackBar,public dialog: MatDialog,private _router:Router,private _authservice:AuthService,private _agentService:AgentService) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));  

      this.usr_id=this._authservice.decodeToken()  
      
  }

  get f() { return this.companyDetailsForm.controls; }
  get s() { return this.companyMainContactForm.controls; }
  get t() { return this.companyOverviewForm.controls; }
  get fo() { return this.bankDetailsForm.controls; }
  get fi() { return this.referencesForm.controls; } 



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
this.companydetailsSubmit=true
if(this.companyDetailsForm.valid)
{
    if(this.areacode1=='')
    {
      var phone:string=91+this.companyDetailsForm.value.company_phone_number
    }
    else
    {
      var phone:string=this.areacode1+this.companyDetailsForm.value.company_phone_number
    }    
    let formservice=this.companyDetailsForm.value
    let data={
      website:formservice.website,
      doing_business_as:formservice.doing_business_as,
      address_line_1:formservice.address_line_1,
      address_line_2:formservice.address_line_2,
      city:formservice.city,
      state:formservice.state,
      country:formservice.country,
      pincode:formservice.pincode,
      company_phone_number:phone,
      company_email_address:formservice.company_email_address,
      fb_page: formservice.fb_page,
      linked_in:formservice.linked_in,
      twitter: formservice.twitter,
      instagram: formservice.instagram,
      literal:"COMPANY_DETAIL"
    }
    
    this._registrationservice.postAgent_Details(data).subscribe((res:any)=>{
      if(res)
      {
        console.log(res)
        this.myStepper.next()
      }
    })
  }
  }

  companyMainContactSubmit()
  {
    this.maincontactDetailsSubmit=true
if(this.companyMainContactForm.valid)
{
    if(this.areacode2=='')
  {
    var phone:string=91+this.companyMainContactForm.value.business_owner_contact_number
  }
  else
  {
    var phone:string=this.areacode2+this.companyMainContactForm.value.business_owner_contact_number
  }    
  let formservice=this.companyMainContactForm.value
 
  let data={
        // Title                             : formservice.Title,
        // First_Name                        : formservice.First_Name,
        // Last_Name                          : formservice.Last_Name,
        job_title                          : formservice.job_title,
        email_address                      : formservice.email_address,
        // Confirm_Email_Address              :formservice.Confirm_Email_Address,
        business_owner_contact_number      : phone,
        business_owner_email               : formservice.business_owner_email,
        linked_in_profile                  :formservice.linked_in_profile,
        literal:"COMPANY_CONTACT"

  }
    this._registrationservice.postAgent_Details(data).subscribe((res:any)=>{
      if(res)
        {
          console.log(res)
          this.myStepper.next()
        }
      })
  }
}



  companyOverviewSubmit()
  {
    this.companyoverviewDetailsSubmit=true
    if(this.companyOverviewForm.valid)
    {

    let formservice=this.companyOverviewForm.value
    let data={
      business_founded_year: formservice.business_founded_year,
      registration: formservice.registration,
      state_of_incorporation:formservice.state_of_incorporation,
      experience:formservice.experience,
      literal:"COMPANY_OVERVIEW"
    }
    this._registrationservice.postAgent_Details(data).subscribe((res:any)=>{
      if(res)
        {
        console.log(data)
          this.myStepper.next()
        }
      })  
    }
  }
  
  companyBankDetailsSubmit()
  {
    this.bankDetailsSubmit=true
    if(this.bankDetailsForm.valid)
    {
    let formservice=this.bankDetailsForm.value
    let data={
      bank_account_name:formservice.bank_account_name,
      account_number:formservice.account_number,
      bank_name: formservice.bank_name,
      bank_branch: formservice.bank_branch,
      ifsc_code:formservice.ifsc_code,
      iban_code: formservice.iban_code,
      swift_code: formservice.swift_code,
      literal:"BANK_DETAIL"
    }
    this._registrationservice.postAgent_Details(data).subscribe((res:any)=>{
    if(res)
    {
      console.log(res)
      this.myStepper.next()
    }
    },(error)=>{
      // if(error.statusText='Conflict')
      // {
      //     this._snackBar.open('Email already registred with TAG.Please click on Continue', 'x', {
      //     duration: 3000,
      //     verticalPosition: 'top',
      //     horizontalPosition: 'center'
      //   });
      // }
      console.log(error)
    }
    )
  }
  }

  onchecked()
    {
      this.policyAgree=(this.policyAgree)? false : true;
    }

  companyReferenceSubmit()
  {
    this.referenceDetailsSubmit=true
    
    if(this.referencesForm.valid)
    {
    let formservice=this.referencesForm.value
    let data={
      first_name_and_last_name: formservice.first_name_and_last_name,
      referee_designation:  formservice.referee_designation,
      name_of_institution:  formservice.name_of_institution,
      ref_country: formservice.ref_country,
      preferrend_contact_number:  formservice.preferrend_contact_number,
      ref_email_address: formservice.ref_email_address,
      literal:"REFERENCE"
      // owner_id:sessionStorage.getItem('mail')
    }

           this._registrationservice.postAgent_Details(data).subscribe((res:any)=>{
            if(res)
            {
              this.myStepper.next()
            }
            })
          
        }   
  }

  // ngAfterViewInit() {
    
  //     this.myStepper.selectedIndex = 3;
  // }
changeStep(step:number)
{
  this.selectedindex=step-1
}
async acceptSubmit()
{

  if(this.policyAgree==true)
          {
            this.loader=true
            console.log("submitted")
            await this._registrationservice.postAgent_Submit().subscribe((result:any)=>{
              if(result)
              {
                const dialogRef = this.dialog.open(AgentSuccessdialogComponent, {                   
                  width: '630px',
                  panelClass:'icon-outside'
                });
            
            //  this.sendPdf()

                dialogRef.afterClosed().subscribe(result => {
                  // localStorage.clear();
                  sessionStorage.clear()
                  this.loader=false
                  this._router.navigateByUrl('agent-register')
                });
              }
            },
            (error)=>{
              console.log(error)
            })
          }
          else
          {
            this._snackBar.open('please accept the agent declaration', 'x', {
                  duration: 3000,
                  verticalPosition: 'top',
                  horizontalPosition: 'center'
                });          
          }


}
// async sendPdf()
// {
   

//    const pdfUrl = 'assets/Admit_group-Draft_Contract.pdf';
//    const pdfBytes =  await fetch(pdfUrl).then((res) => res.arrayBuffer());
 
 
//    const pdfDoc =  await PDFDocument.load(pdfBytes);
 
  
//    const pages = pdfDoc.getPages();
//    const firstPage = pages[0];
//    const thirdPage =pages[2];
 
  
//    const fontSize = 12;
//    const fontColor = rgb(0, 0, 0); 
 
   
//    const name = 'John Doe';
//    const date='04/07/2023';
//    const repBy='jayaraju'
//    const repRole='developer'
//    const repName='jayaraju'
//    const repDate='04/07/2023'
//    const admitBy='rajesh'
//    const admitRole='BDE'
//    const admitName='rajesh'
//    const admitDate='04/07/2023'

//    firstPage.drawText(name, {
//      x: 150,
//      y: 605,
//      size: fontSize,
//      color: fontColor,
//    });
//    firstPage.drawText(date, {
//      x: 400,
//      y: 650,
//      size: fontSize,
//      color: fontColor,
//    });
//    thirdPage.drawText(repBy, {
//      x: 105,
//      y: 460,
//      size: fontSize,
//      color: fontColor,
//    });
//    thirdPage.drawText(repRole, {
//      x: 105,
//      y: 400,
//      size: fontSize,
//      color: fontColor,
//    });
//    thirdPage.drawText(repName, {
//      x: 105,
//      y: 363,
//      size: fontSize,
//      color: fontColor,
//    });
//    thirdPage.drawText(repDate, {
//      x: 105,
//      y: 305,
//      size: fontSize,
//      color: fontColor,
//    });
//    thirdPage.drawText(admitBy, {
//      x: 400,
//      y: 460,
//      size: fontSize,
//      color: fontColor,
//    });
//    thirdPage.drawText(admitRole, {
//      x: 400,
//      y: 400,
//      size: fontSize,
//      color: fontColor,
//    });
//    thirdPage.drawText(admitName, {
//      x: 400,
//      y: 363,
//      size: fontSize,
//      color: fontColor,
//    });
//    thirdPage.drawText(admitDate, {
//      x: 400,
//      y: 305,
//      size: fontSize,
//      color: fontColor,
//    });

 

//    const modifiedPdfBytes =  await pdfDoc.save();
 
   

//  const modifiedPdfBlob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });
//  const modifiedPdfUrl = URL.createObjectURL(modifiedPdfBlob);
 
//  window.open(modifiedPdfUrl, '_blank');


// }

  async fetchData() {
    let selectedValue:any
    
   
   await this._agentService.getAgentById(this.usr_id.sub).subscribe(res=>{
    console.log(res)
    // if(res.have_details_of.length)
    // {
    //   this.selectedindex=res.have_details_of.length-1
    //   console.log("testing")
    // }
   
    //timing not working to update stepper 
    const stepValue = res.have_details_of.length-1;
      let tnumber = res.company_phone_number.substring(2);
      this.companyDetailsForm.patchValue({
        doing_business_as:res.doing_business_as,
        address_line_1:res.address_line_1,
        address_line_2:res.address_line_2,
        city:res.city,
        state:res.state,
        country:res.country,
        pincode:res.pincode,
        company_phone_number:tnumber,
        website:res.website,
        company_email_address:res.company_email_address,
         linked_in:res.linked_in,
        twitter:res.twitter,
        fb_page:res.fb_page,
        instagram:res.instagram
      });
      
      this._agentService.getSelfData().subscribe(res=>{
        console.log(res)
        console.log("test")
        this.companyMainContactForm.patchValue({
          first_name:res.first_name,
          last_name:res.last_name,
          email_address:res.email
        })
      })



      let bnumber = res.business_owner_contact_number.substring(2);
      this.companyMainContactForm.patchValue({
        job_title:res.job_title,
        business_owner_contact_number:bnumber,
        business_owner_email:res.business_owner_email,
        linked_in_profile:res.linked_in_profile
      });
      //Third form in stepper
      let Businessyear=parseInt(res.business_founded_year)
      this.companyOverviewForm.patchValue({
        
        business_founded_year:Businessyear,
        registration: res.registration,
        state_of_incorporation:res.state_of_incorporation,
        experience:res.experience
      });
    
    
      //Fourth form in stepper
      this.bankDetailsForm.patchValue({
        bank_account_name: res.bank_account_name,
        account_number: res.account_number,
        bank_name: res.bank_name,
        bank_branch: res.bank_branch,
        ifsc_code:res.ifsc_code,
        iban_code: res.iban_code,
        swift_code: res.swift_code,
      });
    
    
      //Fifth form in stepper
      this.referencesForm.patchValue({
        first_name_and_last_name:res.first_name_and_last_name,
        referee_designation:res.referee_designation,
        name_of_institution: res.name_of_institution,
        ref_country: res.ref_country,
        preferrend_contact_number:res.preferrend_contact_number,
        ref_email_address:res.ref_email_address
      });
      // this.selectedindex=res.have_details_of.length-1
      this.cdr.detectChanges();
      this.matchange()
    }
    ,(error)=>{
      console.log(error)
      console.log("test")
    });
      
  }
  getself()
  {
    this._agentService.getSelfData().subscribe(res=>{
     
      this.companyMainContactForm.patchValue({
        first_name:res.first_name,
        last_name:res.last_name,
        email_address:res.email
      })
    })
    this.cdr.detectChanges();
  }
  matchange()
  {
    this.selectedindex=3
  }
}