import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { AuthenticationComponent } from './component/authentication/authentication.component';
import { ComingSoonComponent } from './component/coming-soon/coming-soon.component';
import { MyaccountComponent } from './component/myaccount/myaccount.component';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { MaterialModule } from '../material/material.module';
import { AgentregistrationComponent } from './component/agentregistration/agentregistration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgentregistrationdetailsComponent } from './component/agentregistrationdetails/agentregistrationdetails.component';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { ValidateagentComponent } from './component/validateagent/validateagent.component';
import { LoginComponent } from './component/login/login.component';
import { UniversitiesComponent } from './component/universities/universities.component';
import { HttpClientModule } from '@angular/common/http';
import { AgentSuccessdialogComponent } from './component/agent-successdialog/agent-successdialog.component';
import { AuthService } from '../_services/auth.service';
import { OtpagentComponent } from './component/otpagent/otpagent.component';
import { AgentregistercontinueComponent } from './component/agentregistercontinue/agentregistercontinue.component';
import { EmailMaskPipe } from '../shared/email-mask.pipe';
import { EmployeeLoginComponent } from './component/employee-login/employee-login.component';


const routes: Routes = [
  {path:'',component:LandingComponent,children: [
    {path:'',component:MainComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'authentication',component:AuthenticationComponent},
    {path:'myacount',component:MyaccountComponent},
    {path:'forget-password',component:ForgetpasswordComponent},
    {path:"comingsoon",component:ComingSoonComponent},
    {path:"agent-register",component:AgentregistrationComponent},
    {path:"agent-registerDetails",component:AgentregistrationdetailsComponent},
    {path:"validate-agent",component:ValidateagentComponent},
    {path:"login",component:LoginComponent},
    {path:"universities",component:UniversitiesComponent},
    {path:"agent-otp-verify",component:OtpagentComponent},
    {path:"continue-agent-registration",component:AgentregistercontinueComponent},
    {path:'employee-login',component:EmployeeLoginComponent}
  ]}
  // {path:'',component:LandingComponent}
  
];

@NgModule({
  declarations: [
    LandingComponent,
    MainComponent,
    AboutusComponent,
    ContactusComponent,
    AuthenticationComponent,
    ComingSoonComponent,
    MyaccountComponent,
    ForgetpasswordComponent,
    AgentregistrationComponent,
    AgentregistrationdetailsComponent,
    ValidateagentComponent,
    LoginComponent,
    UniversitiesComponent,
    AgentSuccessdialogComponent,
    OtpagentComponent,
    AgentregistercontinueComponent,
    EmailMaskPipe,
    EmployeeLoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    RouterModule.forChild(routes)
  ],
  providers: [AuthService],

})
export class LandingModule { }
