import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-aprrovalconfirm',
  templateUrl: './aprrovalconfirm.component.html',
  styleUrls: ['./aprrovalconfirm.component.scss']
})
export class AprrovalconfirmComponent implements OnInit {
  // status:any
  constructor(
    public dialogRef: MatDialogRef<AprrovalconfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onOkClick(): void {
    this.dialogRef.close(true);
  }
}
