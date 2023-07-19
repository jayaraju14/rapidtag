import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {Agent_User} from './agent';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

    // _server="http://103.175.163.146:8000/"
    // _server="http://127.0.0.1:8000/api/"
    _server=environment._url
  constructor(private http:HttpClient) { }
   headers = new HttpHeaders({
    'Content-Type': 'application/json' });
 options = { headers:this.headers };

   agent_user()
  {
    return this.http.get(this._server+"users")
  }
  //agent user upload api
  postAgent_User(data:Agent_User): Observable<any>
  {
    // console.log(data)
    return this.http.post<any>(this._server+"agent/register",data)
  }

postAgent_Details(data:any)
{
  return this.http.post(this._server+"agent/register/details/",data,this.options)
}

  //agent company upload api
  postAgent_company(data:any): Observable<any>
  {
    return this.http.post(this._server+"agent/register/details/",data,this.options)
  }
 

  postAgent_Submit()
  {
    return this.http.post(this._server+"agent/register/submit/",'')
    
  }




 //sending otp request
 AgentReqOtp(email:any)
 {
  const params = new HttpParams()
    .set('email', email)
  return this.http.post<any>(this._server+"auth/otp",null,{params})
 }
//  varifying otp 
 VerifyOtp(otp:string)
 {
  
  const params = new HttpParams()
    // .set('email', localStorage.mail)
    .set('email', sessionStorage.mail)
    .set('otp', otp);

  return this.http.post<any>(this._server+"auth/otp/verify",null,{params})
 }
}