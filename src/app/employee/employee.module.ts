import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeedashboardComponent } from './pages/employeedashboard/employeedashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { EmployeesidenavComponent } from './pages/employeesidenav/employeesidenav.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AllstudentsComponent } from './pages/allstudents/allstudents.component';
import { MystudentsComponent } from './pages/mystudents/mystudents.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { UniversitiesComponent } from './pages/universities/universities.component';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { FinancialComponent } from './pages/financial/financial.component';
import { SupportComponent } from './pages/support/support.component';
import { AgentsComponent } from './pages/agents/agents.component';
import { AdminstrationComponent } from './pages/adminstration/adminstration.component';
import { SettingsComponent } from './pages/settings/settings.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AgentviewComponent } from './pages/agents/agentview/agentview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { StudentinfoComponent } from './pages/studentinfo/studentinfo.component';
import { AprrovalconfirmComponent } from './pages/agents/approvalconfirm/aprrovalconfirm.component';
import { InternalteamComponent } from './pages/internalteam/internalteam.component';


const routes:Routes=[    
  {path:'',component:EmployeedashboardComponent,

children:[
  {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path:'dashboard',component:HomeComponent},
  {path:'allstudents',component:AllstudentsComponent},
  {path:'mystudents',component:MystudentsComponent},
  {path:'messages',component:MessagesComponent},
  {path:'universities',component:UniversitiesComponent},
  {path:'applications',component:ApplicationsComponent},
  {path:'financial',component:FinancialComponent},
  {path:'support',component:SupportComponent},
  {path:'agents',component:AgentsComponent},
  {path:'adminstration',component:AdminstrationComponent},
  {path:'settings',component:SettingsComponent},
  {path:'agentview',component:AgentviewComponent},
  {path:'studentInfo/:id',component:StudentinfoComponent},
  {path:'team',component:InternalteamComponent}
]
},


]


@NgModule({
  declarations: [
    EmployeedashboardComponent,
    HomeComponent,
    EmployeesidenavComponent,
    AllstudentsComponent,
    MystudentsComponent,
    MessagesComponent,
    UniversitiesComponent,
    ApplicationsComponent,
    FinancialComponent,
    SupportComponent,
    AgentsComponent,
    AdminstrationComponent,
    SettingsComponent,
    AgentviewComponent,
    StudentinfoComponent,
    AprrovalconfirmComponent,
    InternalteamComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    Ng2TelInputModule
  ]
})
export class EmployeeModule { }
