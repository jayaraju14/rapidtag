import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-internalteam',
  templateUrl: './internalteam.component.html',
  styleUrls: ['./internalteam.component.scss']
})
export class InternalteamComponent implements OnInit {

  displayedColumns: string[] = ['University_Name', 'University_Code','TAG_Comm','Agent_Comm'];
  users:any
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private _empService:EmployeeService) {
   }

  ngOnInit(): void {
    this._empService.getAllEMployees().subscribe(res=>{
      console.log(res)
      this.users=res.data
    },
    
    (error)=>{
      console.log(error)
    })
  }

}

