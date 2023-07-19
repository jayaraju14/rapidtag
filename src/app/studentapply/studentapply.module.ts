import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IeltsComponent } from './reusecomponents/ielts/ielts.component';
import { ToeflComponent } from './reusecomponents/toefl/toefl.component';
import { DuolingoComponent } from './reusecomponents/duolingo/duolingo.component';
import { PteComponent } from './reusecomponents/pte/pte.component';
import { OthersComponent } from './reusecomponents/others/others.component';
import { GreComponent } from './reusecomponents/gre/gre.component';
import { UniversityselectionComponent } from './universityselection/universityselection.component';
import { StudentstudyinfoComponent } from './studentstudyinfo/studentstudyinfo.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { EducationdetailsComponent } from './educationdetails/educationdetails.component';
import { DocumentsComponent } from './documents/documents.component';
import { StudentsubmitComponent } from './studentsubmit/studentsubmit.component';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { StudentsuccessdialogComponent } from './studentsuccessdialog/studentsuccessdialog.component';
import { AuthGuard } from '../shared/auth.guard';



const routes: Routes = [
//   {path:'',component:LandingComponent,children: [
//     {path:'',component:MainComponent}
//   ]}
  {path:'',component:StudentinfoComponent},
  {path:"studentapplication",component:StudentstudyinfoComponent,
  canActivate: [AuthGuard],
  data: { roles: ['AGENT']}
  }

];

@NgModule({
  declarations: [
    StudentinfoComponent,
    IeltsComponent,
    ToeflComponent,
    DuolingoComponent,
    PteComponent,
    OthersComponent,
    GreComponent,
    StudentstudyinfoComponent,
    UniversityselectionComponent,
    StudentdetailsComponent,
    EducationdetailsComponent,
    DocumentsComponent,
    StudentsubmitComponent,
    StudentsuccessdialogComponent,
    
   
    
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
export class StudentapplyModule { }
