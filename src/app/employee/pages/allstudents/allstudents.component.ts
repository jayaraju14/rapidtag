import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/_services/student.service';


export interface UserData {
  Created_Date:string;
  Name:string;
  Email:string;
  phone:string;
  appOwner:string
  Application_Owner:string;
  status:string;
  Last_Activity:string;
  Country_Of_Intrest:string;
}

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.scss']
})
export class AllstudentsComponent implements AfterViewInit {


  displayedColumns: string[] = ['Created_Date', 'Name','Email','phone','appOwner','Application_Owner','status'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router:Router,private _studentService:StudentService) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
    // const users: UserData[] = [
    //   {Created_Date:'December,10,1815',Name:'Ada Lavaloce',Email:'',phone:'',student_counselor:'',Application_Owner:'',status:'',Last_Activity:'',Country_Of_Intrest:''},
    //   {Created_Date:'December,9,1906',Name:'Grace Hoper',Email:'',phone:'',student_counselor:'',Application_Owner:'',status:'',Last_Activity:'',Country_Of_Intrest:''},
    //   {Created_Date:'August,17,1936',Name:'Margaret Hamilton',Email:'',phone:'',student_counselor:'',Application_Owner:'',status:'',Last_Activity:'',Country_Of_Intrest:''},
    //   {Created_Date:'June,24,1917',Name:'joan clarke',Email:'',phone:'',student_counselor:'',Application_Owner:'',status:'',Last_Activity:'',Country_Of_Intrest:''},
    //   {Created_Date:'December,10,1815',Name:'Ada Lavaloce',Email:'',phone:'',student_counselor:'',Application_Owner:'',status:'',Last_Activity:'',Country_Of_Intrest:''},
    //   {Created_Date:'December,9,1906',Name:'Grace Hoper',Email:'',phone:'',student_counselor:'',Application_Owner:'',status:'',Last_Activity:'',Country_Of_Intrest:''},
    //   {Created_Date:'August,17,1936',Name:'Margaret Hamilton',Email:'',phone:'',student_counselor:'',Application_Owner:'',status:'',Last_Activity:'',Country_Of_Intrest:''},
    //   {Created_Date:'June,24,1917',Name:'joan clarke',Email:'',phone:'',student_counselor:'',Application_Owner:'',status:'',Last_Activity:'',Country_Of_Intrest:''}, {Created_Date:'December,10,1815',Name:'Ada Lavaloce',Email:'',phone:'',student_counselor:'',Application_Owner:'',status:'',Last_Activity:'',Country_Of_Intrest:''},
    //   {Created_Date:'December,9,1906',Name:'Grace Hoper',Email:'',phone:'',student_counselor:'',Application_Owner:'',status:'',Last_Activity:'',Country_Of_Intrest:''},
    //   {Created_Date:'August,17,1936',Name:'Margaret Hamilton',Email:'',phone:'',student_counselor:'',Application_Owner:'',status:'',Last_Activity:'',Country_Of_Intrest:''},
    //   {Created_Date:'June,24,1917',Name:'joan clarke',Email:'',phone:'',student_counselor:'',Application_Owner:'',status:'',Last_Activity:'',Country_Of_Intrest:''},
    // ];
    // this.dataSource.data = users;
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.loadData();
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
    // console.log(data)
    // this._router.navigate(['/agentview'])
    this._router.navigate(['employee/studentInfo',data.Email])

  }
}
