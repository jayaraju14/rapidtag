import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingModule } from './landing/landing.module';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { StudentModule } from './student/student.module';
import { StudentapplyModule } from './studentapply/studentapply.module';
import {ToastrModule} from 'ngx-toastr';
import { AuthService } from './_services/auth.service';
// import { AuthGuard } from './shared/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/token.interceptor';
import { AuthGuard } from './shared/auth.guard';
import { ErrorInterceptorService } from './shared/error-interceptor.service';
// import { TokenInterceptor } from './shared/token.interceptor';
// import { ErrorInterceptorService } from './shared/error-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LandingModule,
    MaterialModule,
    StudentModule,
    StudentapplyModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    ToastrModule.forRoot()
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
    AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
