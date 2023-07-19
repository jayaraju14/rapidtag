import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-agentsidenav',
  templateUrl: './agentsidenav.component.html',
  styleUrls: ['./agentsidenav.component.scss']
})
export class AgentsidenavComponent implements OnInit {
  isExpanded:boolean=false
  agentFirst:string
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private authService:AuthService,private _router:Router,
    private empService:EmployeeService) { }

  ngOnInit(): void {
    this.empService.getSelfData().subscribe(res=>{
      this.agentFirst=res.first_name
    })
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }


  logout()
  {
    this.authService.logout().subscribe(res=>{
      console.log()
    if(res)
    {
      // localStorage.clear()
      sessionStorage.clear()
      this._router.navigateByUrl('/login')
    }
    },(error)=>{
      console.log(error)
    })
  }

}
