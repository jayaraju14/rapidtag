import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
// import { Agentstage1Component } from './agentstage1/agentstage1.component';
// import { Agentstage2Component } from './agentstage2/agentstage2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2TelInputModule } from 'ng2-tel-input';



const routes: Routes = [
  // {path:'',component:DashboardhomeComponent,children: [
  //   {path:'',component:DashboardhomeComponent},
  //   {path:'dashboard',component:DashboardhomeComponent},
  //   {path:'agent1',component:Agentstage1Component},
  //   {path:'agent2',component:Agentstage2Component}
    
  // ]}
  // {path:'agent1',component:Agentstage1Component},
  // {path:'agent2',component:Agentstage2Component}
];


@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
    DashboardhomeComponent,
    // Agentstage1Component,
    // Agentstage2Component,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    RouterModule.forChild(routes)

  ]
})
export class DashboardModule { }
