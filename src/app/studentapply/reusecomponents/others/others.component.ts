import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit {
  selectedDate: Date | null;
  constructor(public dialogRef: MatDialogRef<OthersComponent>) { }

  ngOnInit(): void {
  }

  onSelect(event:any){
    console.log(event);
    this.selectedDate= event;
  }

  closeDialog() {
    // this.dialogRef.close({ event: 'close', data: "ielts" });
  }
}