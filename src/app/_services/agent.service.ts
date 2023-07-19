import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  // _server="http://127.0.0.1:8000/api/"
  _server=environment._url
  constructor(private http:HttpClient) { }
   headers = new HttpHeaders({
    'Content-Type': 'application/json' });
 options = { headers:this.headers };

  getAgentById(data:any): Observable<any>
 {
  // const params = new HttpParams()
  // .set('user_id', data)
  // .set('response_schema','')
  console.log(this._server+`agent/details/${data}`)
  return this.http.get<any>(this._server+`agent/details/${data}`,this.options)
 }

        getSelfData()
        {
            return this.http.get<any>((this._server+`users/me`))
        }

 getAgentBasicDetails(email:any): Observable<any>
 {
  // const params = new HttpParams()
  // .set('user_id', data)
  // .set('response_schema','')
  // console.log(this._server+`agent/details/${data}`)
  return this.http.get<any>(this._server+`users/${email}`)
 }

getAllAgents()
{
  let data={
    "pagination": {
      "page": 0,
      "limit": 200
    },
    "with_details": true
  }

  return this.http.post<any>(this._server+`users/agent/`,data)
}

agentAprroval(user_id:any,action:any,file:any)
{
  const params = new HttpParams()
  .set('action', action)
  return this.http.post<any>(this._server+`users/approve/${user_id}`,file,{params})
}

getUniversities()
{
  return this.http.get<any>(this._server+`university`)
}


}
