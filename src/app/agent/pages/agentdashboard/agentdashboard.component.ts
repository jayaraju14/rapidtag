import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from 'src/app/_services/agent.service';

@Component({
  selector: 'app-agentdashboard',
  templateUrl: './agentdashboard.component.html',
  styleUrls: ['./agentdashboard.component.scss']
})
export class AgentdashboardComponent implements OnInit {
selfData:any
  constructor( private _agentService:AgentService,private _router:Router) { }

  ngOnInit(): void {
    this._agentService.getSelfData().subscribe(res=>{
      this.selfData=res
    
    if(res.password_reset_required==true)
    {
      this._router.navigateByUrl('/agent/change-password')
    }
    },(error)=>{
      console.log(error)
    })
    
    
  }

}
