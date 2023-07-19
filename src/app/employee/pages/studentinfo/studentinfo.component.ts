import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.scss'],
  providers: [DatePipe]
})
export class StudentinfoComponent implements OnInit {

  studentData:any
  constructor(private route: ActivatedRoute,private _studentService:StudentService,private datePipe: DatePipe) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const receivedData = params['id'];
      // console.log(receivedData)
      this._studentService.getstudentById(receivedData).subscribe(res=>{
        this.studentData=res
        console.log(res[0])
      })

    });
  }

  formatUniversityValue(value: any): string {
    console.log(value)
    if (value === null) {
      return ''; // Or you can return a default value for null values
    }

    if (typeof value === 'string') {
      const dateValue = new Date(value.replace('Z', ''));
      if (isNaN(dateValue.getTime())) {
        return value; // Return the original value if it's not a valid date string
      }
      value = dateValue;
    }

    if (value instanceof Date) {
      return this.datePipe.transform(value, 'yyyy-MM-ddTHH:mm:ss.SSS') || ''; // Use default value for null
    }

    return value.toString(); // Return the string representation of other non-null values
  }

}
