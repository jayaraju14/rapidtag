import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUrl: string;
  isLoggedIn: boolean;
  userRole:any
  ngOnInit(): void {
    
      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
  }

  );
  // this.userRole= localStorage.getItem('role') 
    
    // this.onScrol()
  }
  onScroll(event:any) {
    // window.scroll(0,0);
 
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
     
 
     //or document.body.scrollTop = 0;
     //or document.querySelector('body').scrollTo(0,0)
     this.cdr.detectChanges()
    // console.log(this.authService.decodeToken())
    if(this.authService.decodeToken())
    {
      this.userRole=this.authService.decodeToken().role
    }
    else
    {
      this.userRole=''
    }
 }
onScrol() {
    // window.scroll(0,0);

    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
    }
    constructor(@Inject(AuthService) public authService: AuthService, private router:Router,private cdr: ChangeDetectorRef,) {}
    applynow() {
      this.authService.applynow();
    }
    login(): void {
      // simulate login by setting isLoggedIn to true
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          const url = event.url;
          if (url === '/login') {
            this.authService.applynow(); // call the logout method on the AuthService for the login URL
          } else {
            // this.authService.login(); // call the login method on the AuthService for all other URLs
          }
        }
      });
      }

      isEmployeeLoginRoute(): boolean {
        return this.router.url.includes('employee-login');
      }

}
