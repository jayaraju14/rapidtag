import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  // }
  {
    path:'',
    loadChildren:()=>import('./landing/landing.module').then(m=>m.LandingModule)
  },
  {
    path:'student',
    loadChildren:()=>import('./student/student.module').then(m=>m.StudentModule)
  },
  // studentapply
  {
    
    path:'apply-student',
   loadChildren:()=>import('./studentapply/studentapply.module').then(m=>m.StudentapplyModule),
   canActivate: [AuthGuard],
    data: { roles: ['AGENT']}
  },
  {
    path:'blog',
    loadChildren:()=>import('./blog/blog.module').then(m=>m.BlogModule)
  },
  
  {
    path:'agent',
    loadChildren:()=>import('./agent/agent.module').then(m=>m.AgentModule),
    canActivate: [AuthGuard],
    data: { roles: ['AGENT']}
  },
  {
    path:'employee',
    loadChildren:()=>import('./employee/employee.module').then(m=>m.EmployeeModule),
    canActivate: [AuthGuard],
    data: { roles: ['EMPLOYEE']}
  },

  // {
  //   path:'agenttest1',
  //   loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  //   },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 