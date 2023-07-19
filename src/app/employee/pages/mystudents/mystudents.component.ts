import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/_services/student.service';
import { PageEvent } from '@angular/material/paginator';
import { MatMenuTrigger } from '@angular/material/menu';
import { AgentService } from 'src/app/_services/agent.service';

export interface UserData {
  Created_Date:string;
  Name:string;
  Email:string;
  phone:string;
  appOwner:string
  university_applied:string;
  status:string;
  Last_Activity:string;
  Country_Of_Intrest:string;
}
@Component({
  selector: 'app-mystudents',
  templateUrl: './mystudents.component.html',
  styleUrls: ['./mystudents.component.scss']
})
export class MystudentsComponent implements OnInit {

  pageSizeOptions: number[] = [5, 10, 20];
  pageSize: number = 5;
  showFirstLastButtons: boolean = true;
  displayedColumns: string[] = ['Created_Date', 'Name','Email','phone','university_applied'];
  // dataSource: MatTableDataSource<UserData>;

  users: UserData[]
   dataSource = new MatTableDataSource<UserData>();
   menuTrigger: MatMenuTrigger;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router:Router,private _studentService:StudentService,private _agentService:AgentService) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
   
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
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.pageSize = event.pageSize;
  }
  loadData()
  {
    this._studentService.getstudentDetailsByEmployee().subscribe(res=>{
      this.dataSource.data=res.posts
      console.log(res.posts)
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
    console.log(data.id)
    let id=data.id
    this._router.navigate(['employee/studentInfo',id])
  }
  getAppOwner(id:any):any
  {
    this._agentService.getAgentBasicDetails(id)
  }
}

