import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
   isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
   isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();
       currentUrl: string;
       userRole:string;
       isLoggedIn:any
  // _server="http://127.0.0.1:8000/api/"
  _server=environment._url

  constructor(private http:HttpClient) { }

       
       getAgentById(data:any): Observable<any>
        {
          console.log(this._server+`agent/details/${data}`)
          return this.http.get<any>(this._server+`agent/details/${data}`)
        }
      
      login(credentials:any): Observable<any>{
       
           return this.http.post<any>(this._server+`auth/login`,credentials)
          .pipe(map(user=>{ 
            // localStorage.setItem('access_token',user.access_token)
            sessionStorage.setItem('access_token',user.access_token)
            var data=this.decodeToken()
            // localStorage.setItem('sub',data.sub)
            // localStorage.setItem('role',data.role)
            sessionStorage.setItem('sub',data.sub)
            sessionStorage.setItem('role',data.role)
            this.userRole=data.role
            // localStorage.setItem('mail',data.email)
            sessionStorage.setItem('mail',data.email)
            return data
          }))
        
      }
      isAuthenticatedUser(): boolean {
        // if(localStorage.getItem('role'))
        if(sessionStorage.getItem('role'))
        {
          this.isAuthenticatedSubject.next(true);
        }

        return this.isAuthenticatedSubject.value;
      }
    
  

      applynow(): void {
  
      }
  getUserRole(): string {
    // let user =localStorage.getItem('role') || ''
    let user =sessionStorage.getItem('role') || ''
    return user;
  }



    decodeToken()  {
      // const token: string | null = localStorage.getItem('access_token')
      const token: string | null = sessionStorage.getItem('access_token')
      if (token) {
        const decodedToken:any = jwt_decode(token);
        return  decodedToken;
      } else {
        // Handle the case when the token is null
        // Return an appropriate value or throw an error
        return null;
      }
    }
    getTokenExpiryStatus()
    {
      const token: string | null = sessionStorage.getItem('access_token')
      if (token) {
        const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
        return expiry * 1000 > Date.now();
      } else {
        // Handle the case when the token is null (not found in session storage)
        console.log('Token not found in session storage');
        return false; // Or handle the absence of token according to your requirements
      }
    }
    passwordChange(data:any)
    {
      return this.http.post<any>(this._server+`auth/change-password`,data)
    }

    forgetPassword(data:any)
    {
      // const token = localStorage.getItem('access_token');
      const token = sessionStorage.getItem('access_token');

      // Include the token in the request headers
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
      // Make the HTTP POST request with the headers
      return this.http.post<any>(this._server + 'auth/set-password', data, { headers });
    }

    logout()
    {
     const headers = new HttpHeaders({
        'content-type': 'application/json' });
     const options = { headers:headers };
      return this.http.get<any>(this._server+`auth/logout`,options)
    }

    }

