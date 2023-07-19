import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // _server="http://127.0.0.1:8000/api/"
  _server=environment._url
  constructor(private http:HttpClient) { }
   headers = new HttpHeaders({
    'Content-Type': 'application/json' });
 options = { headers:this.headers };


 createStudent(data:any,file:any)
{
  const params = new HttpParams()
  .set('email', data.sEmail)
  .set('contact', data.sNumber)
  return this.http.post<any>(this._server+`students/create/`,file,{params})
}

getstudentDetailsByEmployee()
{
  const token = sessionStorage.getItem('access_token');

      // Include the token in the request headers
      // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  const params = new HttpParams()
  .set('limit','200')
  .set('page', '1')
  return this.http.get<any>(this._server+`students/employee/`,{params})
} 

getstudentDetailsByAgent()
{
  const token = sessionStorage.getItem('access_token');

      // Include the token in the request headers
      // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  // const params = new HttpParams()
  // .set('limit','200')
  // .set('page', '1')
  return this.http.get<any>(this._server+`students/agent/`)
} 
getstudentById(id:any)
{
  // /api/students/{id}/application_details/
  return this.http.get<any>(this._server+`students/${id}/application_details/`)
}

uploaddocuments(data:any,file:any)
  {
    let email:any=sessionStorage.getItem('semail')
    const params = new HttpParams()
    // .set('email', email)
    .set('document_type', data)
    return this.http.put<any>(this._server+`students/${email}/update_doc/`,file,{params})
  }


  studentBasicDetails()
  {
    let email:any=sessionStorage.getItem('semail')  
    const params = new HttpParams()
    // .set('email', email)
    .set('email', email)
    return this.http.get<any>(this._server+`students/${email}/student_details/`)
  }
  updateStudentDetails(data:any)
  {
    let email:any=sessionStorage.getItem('semail')
    return this.http.put<any>(this._server+`students/${email}/student_details/`,data)  
  }

  getStudentEducation()
  {
    let email:any=sessionStorage.getItem('semail')
    return this.http.get<any>(this._server+`students/${email}/education_details/`)  
  }
  updatestudentEducation(data:any)
  {
    let email:any=sessionStorage.getItem('semail')
    return this.http.put<any>(this._server+`students/${email}/education_details/`,data) 
  }
  updateUniversitySelection(data:any,level:any)
  {
    let email:any=sessionStorage.getItem('semail')
    const params = new HttpParams()
    .set('selected_level_of_univ_education', level)
    return this.http.put<any>(this._server+`students/${email}/university_details/`,data,{params}) 
  }

  getStudentDocDetails()
  {
    let email:any=sessionStorage.getItem('semail')
    return this.http.get<any>(this._server+`students/${email}/upload_docs_status/`) 
  }

  studentApplicationSubmit(data:any)
  {
    console.log(data.information_correctness)
    let email:any=sessionStorage.getItem('semail')

    let declaration
    if(data.declaration=true)
    {
      declaration="true"
    }
    else{
      declaration="false"
    }
    const params = new HttpParams()
    .set('information_correctness', data.information_correctness)
    .set('data_usage', data.data_usage)
    .set('email_usage', data.email_usage)
    .set('acadamic_misconduct', data.acadamic_misconduct)
    .set('behaviour_misconduct', data.behaviour_misconduct)
    .set('criminal_offance', data.criminal_offance)
    .set('declaration', declaration)
    .set('signature', data.signature)
    return this.http.put<any>(this._server+`students/${email}/update_consent/`,null,{params})
   
  }

}
