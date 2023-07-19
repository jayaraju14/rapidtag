import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor{
  constructor(private _authService:AuthService)
  {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle the error
        if(error.status==0&&error.statusText=="Unknown Error"&&this._authService.getTokenExpiryStatus()==false)
        {
          console.log("session expired")
          sessionStorage.removeItem('access_token')
          sessionStorage.removeItem('role')
          sessionStorage.removeItem('mail')
          sessionStorage.removeItem('sub')
        }
        return throwError(error);
      })
    );
  }
}
