import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-employeesidenav',
  templateUrl: './employeesidenav.component.html',
  styleUrls: ['./employeesidenav.component.scss']
})
export class EmployeesidenavComponent implements OnInit {
  empFirst:String
  isExpanded:boolean=false
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private empService:EmployeeService,private authService:AuthService,private _router:Router) { }

  ngOnInit(): void {
    this.empService.getSelfData().subscribe(res=>{
      this.empFirst=res.first_name
    })
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  logout()
  {
    this.authService.logout().subscribe(res=>{
      console.log(res)
    if(res)
    {
     
      // localStorage.clear()
      sessionStorage.clear()
      this._router.navigateByUrl('/employee-login')
    }
    }
    ,(error)=>{
      console.log(error)
    }
    )
  }

}
