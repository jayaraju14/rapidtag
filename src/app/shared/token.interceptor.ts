  import { Injectable } from '@angular/core';
  import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
  } from '@angular/common/http';
  import { Observable } from 'rxjs';

  @Injectable()
  export class TokenInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Get the JWT token from wherever you have stored it (e.g., localStorage)
    // const token = localStorage.getItem('access_token');
    const token = sessionStorage.getItem('access_token');
    // Clone the request and add the Authorization header with the JWT token
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    // Pass the modified request to the next interceptor or the backend
    return next.handle(request);
  }
  }
