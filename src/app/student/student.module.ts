import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentmainComponent } from './studentmain/studentmain.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentcheklistComponent } from './components/studentcheklist/studentcheklist.component';
import { MaterialModule } from '../material/material.module';
import { NationalbeforeapplyComponent } from './components/nationalbeforeapply/nationalbeforeapply.component';
import { NationalreadyapplyComponent } from './components/nationalreadyapply/nationalreadyapply.component';
import { NationalafterapplyComponent } from './components/nationalafterapply/nationalafterapply.component';
import { InternationalafterapplyComponent } from './components/internationalafterapply/internationalafterapply.component';
import { InternationalbeforeapplyComponent } from './components/internationalbeforeapply/internationalbeforeapply.component';
import { FinancialdocumentationComponent } from './components/financialdocumentation/financialdocumentation.component';
import { InternationalreadyapplyComponent } from './components/internationalreadyapply/internationalreadyapply.component';


const routes: Routes = [
    {path:'',component:StudentmainComponent,children: [
      {path:'',component:StudentcheklistComponent},
      {path:'national-before-apply',component:NationalbeforeapplyComponent},
      {path:'national-ready-apply',component:NationalreadyapplyComponent},
      {path:'national-after-apply',component:NationalafterapplyComponent},
      {path:'international-before-apply',component:InternationalbeforeapplyComponent},
      {path:'international-ready-apply',component:InternationalreadyapplyComponent},
      {path:'international-after-apply',component:InternationalafterapplyComponent},
      {path:'financial-documentation',component:FinancialdocumentationComponent}
    ]}
    // {path:'',component:StudentmainComponent},
    // {path:"studentapplication",component:StudentstudyinfoComponent}  
  ];

@NgModule({
  declarations: [
    StudentmainComponent,
    StudentcheklistComponent,
    NationalafterapplyComponent,
    NationalbeforeapplyComponent,
    NationalreadyapplyComponent,
    InternationalafterapplyComponent,
    InternationalbeforeapplyComponent,
    InternationalreadyapplyComponent,
    
    FinancialdocumentationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentModule { }
