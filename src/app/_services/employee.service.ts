import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // _server="http://127.0.0.1:8000/api/"
  _server=environment._url
  constructor(private http:HttpClient) { }

//get single agent details by ID 
  getAgentById(data:any): Observable<any>
        {
          // console.log(this._server+`agent/details/${data}`)
          return this.http.get<any>(this._server+`agent/details/${data}`)
        }

        getSelfData()
        {
            return this.http.get<any>((this._server+`users/me`))
        }
        getAllEMployees()
        {
          let data={
            "pagination": {
              "page": 0,
              "limit": 25
            }
          }

          return this.http.post<any>(this._server+`users/employee/`,data)
        }
}
