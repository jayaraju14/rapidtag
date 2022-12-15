import { NgModule } from '@angular/core';
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
    {path:"agent-registerDetails",component:AgentregistrationdetailsComponent}
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
   
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    RouterModule.forChild(routes)
  ]
})
export class LandingModule { }
