import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleblogComponent } from './singleblog/singleblog.component';
import { BlogshomeComponent } from './blogshome/blogshome.component';

import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { MainblogComponent } from './mainblog/mainblog.component';

const routes: Routes = [
  {path:'',component:MainblogComponent,children: [
    {path:'',component:SingleblogComponent},
    {path:'mainblog',component:MainblogComponent},
    {path:'blog',component:SingleblogComponent},
    {path:'blogs',component:BlogshomeComponent},
  ]}
];

@NgModule({
  declarations: [
    SingleblogComponent,
    BlogshomeComponent,
    MainblogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    RouterModule.forChild(routes)

  ]
})
export class BlogModule { }
