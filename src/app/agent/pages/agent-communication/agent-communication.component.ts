import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

export interface UserData {
  Name:string;
  Subject:string;
  Date:string;
  Communication_Type:string
  View_Details:string;
}


@Component({
  selector: 'app-agent-communication',
  templateUrl: './agent-communication.component.html',
  styleUrls: ['./agent-communication.component.scss']
})
export class AgentCommunicationComponent implements OnInit {

  
  displayedColumns: string[] = ['Name','Subject','Date','Communication_Type', 'View_Details'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router:Router) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
    const users: UserData[] = [
      {Name:'James', Subject:'Regarding Fee', Date:'20Jan2023', Communication_Type:'Phonecall', View_Details:'Edit'},

      {Name:'Archana', Subject:'Univeristy Details', Date:'21Feb2023', Communication_Type:'Email',View_Details:'Edit'},

      {Name:'Nirupam', Subject:'Certificates', Date:'2Mar2023', Communication_Type:'Website',View_Details:'Edit'},

      
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
    // this._router.navigate(['employee/studentInfo',data.Email])

  }


}
