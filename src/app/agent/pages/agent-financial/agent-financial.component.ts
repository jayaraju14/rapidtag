import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';


export interface UserData {
  Custom_Report:string;
  Date:string;
  Report:string;
}


@Component({
  selector: 'app-agent-financial',
  templateUrl: './agent-financial.component.html',
  styleUrls: ['./agent-financial.component.scss']
})
export class AgentFinancialComponent implements OnInit {
 
  displayedColumns: string[] = ['Custom_Report','Date','Report'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router:Router) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
    const users: UserData[] = [
      {Custom_Report:'Jan 2023',Date:'31-01-2023',Report:'File'},
      {Custom_Report:'Feb 2023',Date:'28-02-2023',Report:'File'},
      {Custom_Report:'Mar 2023',Date:'31-03-2023',Report:'File'},

      
    ];
    this.dataSource.data = users;
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event:Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.dataSource.filter = value.trim().toLowerCase();
  }
  user(data:any)
  {
    // console.log(data)
    // this._router.navigate(['/agentview'])
    this._router.navigate(['employee/studentInfo',data.Email])

  }
}
