import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  University_Name:string;
  University_Code:string;
  TAG_Comm:string;
  Agent_Comm:string;
  BDE_Comm:string
  Application_Comm:string;
  Gross_Profit:string;
}

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.scss']
})
export class UniversitiesComponent implements OnInit {

  displayedColumns: string[] = ['University_Name', 'University_Code','TAG_Comm','Agent_Comm','BDE_Comm','Application_Comm','Gross_Profit'];
  dataSource: MatTableDataSource<UserData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() {
    this.dataSource = new MatTableDataSource();
    const users: UserData[] = [
     {University_Name:'sa',University_Code:'as',TAG_Comm:'aa',Agent_Comm:'asa',BDE_Comm:'asa',Application_Comm:'asas',Gross_Profit:'asa'},
     {University_Name:'',University_Code:'',TAG_Comm:'',Agent_Comm:'',BDE_Comm:'',Application_Comm:'',Gross_Profit:''}
    ];
    this.dataSource.data = users;
   }

  ngOnInit(): void {
  }

}

