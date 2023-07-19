import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { map, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,private _router:Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const requiredRoles = route.data.roles as string[]; // Get the required roles from the route data
  
    if (this.authService.isAuthenticatedUser()) {
      const userRole = this.authService.getUserRole();

      // Check if the user has any of the required roles
      const hasRequiredRole = requiredRoles.some(role => userRole === role);

      if (hasRequiredRole) {
        // User has the required role, allow access to the route
        return of(true);
      } else {
        // User does not have any of the required roles, redirect to unauthorized page or do any other handling
        // this._router.navigate(['/unauthorized']);
        
        const currentUrl: string = state.url
        return of(false);
      }
    } else {
      // User is not authenticated, redirect to the login page
      // this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });

      const currentUrl: string = state.url
      if(currentUrl=="/agent/dashboard")
      {
        this._router.navigate(['/login'])
      }
      else if(currentUrl=="/employee/dashboard")
      {
        this._router.navigate(['/employee-login'])
      }
      return of(false);
    }
  }
}