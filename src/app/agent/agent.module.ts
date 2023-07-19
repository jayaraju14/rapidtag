import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentdashboardComponent } from './pages/agentdashboard/agentdashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { AgentsidenavComponent } from './pages/agentsidenav/agentsidenav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';


import * as CanvasJSAngularChart from '../../assets/lib/canvasjs.angular.component';
import { AgentStudentsComponent } from './pages/agent-students/agent-students.component';
import { AgentStudentdetailsComponent } from './pages/agent-studentdetails/agent-studentdetails.component';
import { AgentPerformanceComponent } from './pages/agent-performance/agent-performance.component';
import { AgentCommunicationComponent } from './pages/agent-communication/agent-communication.component';
import { AgentMarketingComponent } from './pages/agent-marketing/agent-marketing.component';
import { AgentUsersandteamsComponent } from './pages/agent-usersandteams/agent-usersandteams.component';
import { AgentAccountComponent } from './pages/agent-account/agent-account.component';
import { AgentSupportComponent } from './pages/agent-support/agent-support.component';
import { AgentFinancialComponent } from './pages/agent-financial/agent-financial.component';
import { ChangepasswordComponent } from './pages/changepassword/changepassword.component';

var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

const routes: Routes = [
    {path:'',component:AgentdashboardComponent,
      children:[
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        {path:'dashboard',component:HomeComponent},
        {path:'students', component:AgentStudentsComponent},
        {path:'studentdetails', component:AgentStudentdetailsComponent},
        {path:'performance', component:AgentPerformanceComponent},
        {path:'communication', component:AgentCommunicationComponent},
        {path:'support', component:AgentSupportComponent},
        {path:'marketing', component:AgentMarketingComponent},
        {path:'usersandteams', component:AgentUsersandteamsComponent},
        {path:'financial', component:AgentFinancialComponent},
        {path:'change-password',component:ChangepasswordComponent   }
      ]},  
  ];

@NgModule({
  declarations: [
    AgentdashboardComponent,
    HomeComponent,
    AgentsidenavComponent,
    CanvasJSChart,
    AgentStudentsComponent,
    AgentStudentdetailsComponent,
    AgentPerformanceComponent,
    AgentCommunicationComponent,
    AgentMarketingComponent,
    AgentUsersandteamsComponent,
    AgentAccountComponent,
    AgentSupportComponent,
    AgentFinancialComponent,
    ChangepasswordComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatPaginatorModule

  ]
})
export class AgentModule { }
