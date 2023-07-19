import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/_services/student.service';

export interface UserData {
  Name:string;
  Email:string;
  Phone:string;
  Level_education:string;
  Applied_University:string;
  Applied_Date:string
  // Status:string;
}


/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-agent-students',
  templateUrl: './agent-students.component.html',
  styleUrls: ['./agent-students.component.scss']
})
export class AgentStudentsComponent implements OnInit {

  pageSizeOptions: number[] = [5, 10, 20];
  pageSize: number = 5;
  showFirstLastButtons: boolean = true;
  displayedColumns: string[] = ['Name','Email','Phone','Level_education','Applied_University','Applied_Date'];
  // dataSource: MatTableDataSource<UserData>;

  users: UserData[]
  dataSource = new MatTableDataSource<UserData>();
  menuTrigger: MatMenuTrigger;
 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;

  constructor(private _router:Router,private _studentService:StudentService) {
    // Assign the data to the data source for the table to render
  }

  ngOnInit(): void {
    // this.dataSource.sort = this.sort;
    this.dataSource.sort = this.sort;  
    // this._employeeService.getSelfData().subscribe(res=>{
    //   this.empdata=res
    // })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.loadData();
  }
  loadData()
  {
    this._studentService.getstudentDetailsByAgent().subscribe(res=>{
      this.dataSource.data=res
      console.log(res)
    },
    (error)=>{
      console.log(error)
    })
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
