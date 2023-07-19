import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';


export interface UserData {
  Name:string;
  Teams:string;
  Access:string;
}



@Component({
  selector: 'app-agent-usersandteams',
  templateUrl: './agent-usersandteams.component.html',
  styleUrls: ['./agent-usersandteams.component.scss']
})
export class AgentUsersandteamsComponent implements OnInit {
 
  displayedColumns: string[] = ['Name','Teams','Access'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router:Router) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
    const users: UserData[] = [
      {Name:'Pooja',Teams:'Sales',Access:'Service | Contacts | Sales'},
      {Name:'Shreya',Teams:'Application',Access:'Service | Contacts | Sales | Marketing'},
      {Name:'Hari',Teams:'Sales',Access:'Service | Contacts | Sales'},

      
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
