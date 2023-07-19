import { StickyDirection } from '@angular/cdk/table';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { AgentService } from 'src/app/_services/agent.service';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AprrovalconfirmComponent } from './approvalconfirm/aprrovalconfirm.component';
import { PageEvent } from '@angular/material/paginator';
import { PDFDocument, rgb } from 'pdf-lib';
import { EmployeeService } from 'src/app/_services/employee.service';
import { DatePipe } from '@angular/common';

export interface UserData {
  Agent_id:string;
  Agency_Name:string;
  DOR:string;
  city:string;
  state:string
  status:string;
  assignedTo:string;
}

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements AfterViewInit {
  empdata:any
  loader=false
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize: number = 5;
  showFirstLastButtons: boolean = true;
  displayedColumns: string[] = ['Agent_id', 'Agency_name','DOR','city','state','status','assignedTo','edit'];
  
   users: UserData[]
   dataSource = new MatTableDataSource<UserData>();
   menuTrigger: MatMenuTrigger;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router:Router,private agentService:AgentService,public dialog: MatDialog,private cdr: ChangeDetectorRef,
    private _employeeService:EmployeeService) {  
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;  
    this._employeeService.getSelfData().subscribe(res=>{
      this.empdata=res
    })
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
    this.agentService.getAllAgents().subscribe(res=>{
      console.log(res.data)
      this.dataSource.data=res.data
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
  edit(data:any)
  {
    // console.log(data.Agent_id)
    // this._router.navigate(['/agentview'])
    this._router.navigateByUrl('employee/agentview')

  }
  changeStatus(data:any,id:string,status:string)
  {
    // console.log(data)
    let appreq:any
    const dialogRef: MatDialogRef<AprrovalconfirmComponent> = this.dialog.open(AprrovalconfirmComponent, {
      width: '250px',
      data: { status }
    });
   
    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        if(status=="Approve")
        {
          appreq="APPROVED"
        }
        else if(status=="Reject")
        {
          appreq="REJECTED"
        }
        this.loader=true
        this.cdr.detectChanges()
        const modifiedPdfBlob =await this.sendPdf(data);
        const formData = new FormData();
        formData.append('file', modifiedPdfBlob, 'userAgreement.pdf');
         this.agentService.agentAprroval(id,appreq,formData).subscribe(res=>{
          if(res.message="Approved successfully")
          {
            // this.sendPdf()
            console.log("agreement sent successfully")
          }
          this.loader=false
          this.loadData()
        },(error)=>{
          console.log(error)
        })
      }
    });
  }
  async sendPdf(data:any)
{
  let today=new Date()
  let pipe = new DatePipe('en-US');
  let todayDate = pipe.transform(today, 'dd/MM/YYYY');
   const pdfUrl = 'assets/Admit_group-Draft_Contract.pdf';
   const pdfBytes =  await fetch(pdfUrl).then((res) => res.arrayBuffer());
 
 
   const pdfDoc =  await PDFDocument.load(pdfBytes);
 
  
   const pages = pdfDoc.getPages();
   const firstPage = pages[0];
   const thirdPage =pages[2];
 
  
   const fontSize = 12;
   const fontColor = rgb(0, 0, 0); 
 
   
   const name = data.company_name;
   const date=todayDate ? todayDate:''
   const repBy=data.first_name+" "+data.last_name
   const repRole=data.role
   const repName=data.first_name
   const repDate=todayDate ? todayDate:''
   const admitBy=this.empdata.first_name+" "+this.empdata.last_name
   const admitRole=this.empdata.role
   const admitName=this.empdata.first_name
   const admitDate=todayDate ? todayDate:''

   firstPage.drawText(name, {
     x: 150,
     y: 605,
     size: fontSize,
     color: fontColor,
   });
   firstPage.drawText(date, {
     x: 400,
     y: 650,
     size: fontSize,
     color: fontColor,
   });
   thirdPage.drawText(repBy, {
     x: 105,
     y: 460,
     size: fontSize,
     color: fontColor,
   });
   thirdPage.drawText(repRole, {
     x: 105,
     y: 400,
     size: fontSize,
     color: fontColor,
   });
   thirdPage.drawText(repName, {
     x: 105,
     y: 363,
     size: fontSize,
     color: fontColor,
   });
   thirdPage.drawText(repDate, {
     x: 105,
     y: 305,
     size: fontSize,
     color: fontColor,
   });
   thirdPage.drawText(admitBy, {
     x: 400,
     y: 460,
     size: fontSize,
     color: fontColor,
   });
   thirdPage.drawText(admitRole, {
     x: 400,
     y: 400,
     size: fontSize,
     color: fontColor,
   });
   thirdPage.drawText(admitName, {
     x: 400,
     y: 363,
     size: fontSize,
     color: fontColor,
   });
   thirdPage.drawText(admitDate, {
     x: 400,
     y: 305,
     size: fontSize,
     color: fontColor,
   });

 

   const modifiedPdfBytes =  await pdfDoc.save();
 
   

 const modifiedPdfBlob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });
 return modifiedPdfBlob
//  const modifiedPdfUrl = URL.createObjectURL(modifiedPdfBlob);
 
//  window.open(modifiedPdfUrl, '_blank');


}
}