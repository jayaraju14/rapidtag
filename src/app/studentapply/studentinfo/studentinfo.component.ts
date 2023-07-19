import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DuolingoComponent } from '../reusecomponents/duolingo/duolingo.component';
import { GreComponent } from '../reusecomponents/gre/gre.component';
import { IeltsComponent } from '../reusecomponents/ielts/ielts.component';
import { OthersComponent } from '../reusecomponents/others/others.component';
import { PteComponent } from '../reusecomponents/pte/pte.component';
import { ToeflComponent } from '../reusecomponents/toefl/toefl.component';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.scss'],
})
export class StudentinfoComponent implements OnInit {
  mailvalid = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
  currentFile?: any;
  progress = 0;
  message = '';
  areacode1 = '';
  epsenable = false;
  greenable = false;
  educationenable = false;
  mastersenable = false;
  bacherlorsenable = false;
  loader=false
  // fileName = 'upload passport';
  fileName = 'Choose an image file or drag it here.';
  fileName2 = 'upload eps';
  epssection = false;
  masters = 'upload';
  bacherlors = 'upload';
  intermediate = 'upload';
  ssc = 'upload';
  submitted = false;
  submitAttempt = false;
  fileNames: { [key: string]: string } = {};
  educationNames: { [key: string]: string } = {};
  buttonColor: any;
  constructor(
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    private _router: Router,
    private _studentService: StudentService
  ) {}
  ngOnInit(): void {}

  secondaryInfoForm = this._formBuilder.group({
    // basicinfo:new FormGroup({
    //   sEmail:new FormControl('',[ Validators.required]),
    //   sNumber:new FormControl('',[ Validators.required]),
    //   epsRadio:new FormControl('',[ Validators.required])
    // }),
    greRadio: new FormControl('', Validators.required),
    degreeRadio: new FormControl('', Validators.required),
    leveleducation: new FormControl(''),
    epsRadio: new FormControl('', Validators.required),
    epsdata: this._formBuilder.group({}),
  });

  basicInfoForm = this._formBuilder.group({
    sEmail: new FormControl('', [Validators.required]),
    sNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
    ]),
    // image add
    passportUpload: new FormControl('', [Validators.required]),
  });

  submitbasicForm() {
    this.submitAttempt = true;
    if (this.basicInfoForm.valid) {
      var phone;
      if (this.areacode1 == '') {
        phone = '+' + 91 + this.basicInfoForm.value.sNumber;
      }
      let formservice = this.basicInfoForm.value;
      let data = {
        sEmail: formservice.sEmail,
        sNumber: phone,
        passport: formservice.passportUpload,
      };
      if (data) {
        this.loader=true
        const formData: FormData = new FormData();
        formData.append('passport', this.currentFile);
        this._studentService
          .createStudent(this.basicInfoForm.value, formData)
          .subscribe(
            (res) => {
              // localStorage.setItem('semail', data.sEmail);
              sessionStorage.setItem('semail', data.sEmail);
              this.loader=false
              this.epssection = true;
            },
            (error) => {
              this.loader=false
              console.log(error);
            }
          );
      }
    }
  }
  get f() {
    return this.basicInfoForm.controls;
  }
  get s() {
    return this.secondaryInfoForm.controls;
  }
  // get s(){
  //   return ((this.secondaryInfoForm.get('basicinfo') as FormGroup).controls)
  //   }
  //
  uploadEPS(event: any, buttonId: string) {
    this.selectFile(event);
    // console.log(localStorage.getItem('semail'));
    if (this.currentFile) {
      const formData: FormData = new FormData();
      formData.append('doc', this.currentFile);
      this._studentService.uploaddocuments(buttonId, formData).subscribe(
        (res) => {
          if (res) {
            this.fileNames[buttonId] = this.fileName;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  uploadGRE(event: any, buttonId: string) {
    this.selectFile(event);
    if (this.currentFile) {
      const formData: FormData = new FormData();
      formData.append('doc', this.currentFile);
      this._studentService.uploaddocuments(buttonId, formData).subscribe(
        (res) => {
          if (res) {
            this.fileNames[buttonId] = this.fileName;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  
  uploadEducation(event: any, buttonId: string) {
    this.selectFile(event);
    if (this.currentFile) {
      const formData: FormData = new FormData();
      formData.append('doc', this.currentFile);
      this._studentService.uploaddocuments(buttonId, formData).subscribe(
        (res) => {
          if (res) {
            this.educationNames[buttonId] = this.fileName;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  selectFile(event: any): void {
    debugger
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
      this.fileName = this.currentFile.name;
    } else {
      this.fileName = 'Select File';
    }
    if (this.currentFile) {
      // this.epssection=true
    }
  }

  enablebtn() {
    // alert(this.secondaryInfoForm.value)
    if (this.secondaryInfoForm.value.epsRadio == 'yes') {
      this.epsenable = true;
    } else {
      this.epsenable = false;
    }
  }

  enablegrebtn() {
    if (this.secondaryInfoForm.value.greRadio == 'yes') {
      this.greenable = true;
    } else {
      this.greenable = false;
    }
  }
  enableeducation() {
    if (this.secondaryInfoForm.value.degreeRadio == 'yes') {
      this.educationenable = true;
    } else {
      this.educationenable = false;
    }
  }

  submit() {
    
    this.submitted = true;
    if (this.secondaryInfoForm.valid) {
      console.log(this.secondaryInfoForm.value);
      this._router.navigateByUrl('studentapplication');
    }
  }
  //ielts popup
  ieltsDialog(): void {
    const dialogRef = this.dialog.open(IeltsComponent, {
      // data: {name: this.name, animal: this.animal},
      height: '600px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.data == 'ielts') {
        this.toeflDialog();
      }
    });
  }
  //toefl popup
  toeflDialog(): void {
    const dialogRef = this.dialog.open(ToeflComponent, {
      // data: {name: this.name, animal: this.animal},
      height: '600px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.data == 'toefl') {
        this.duolingoDialog();
      }
    });
  }
  //duolingo popup
  duolingoDialog(): void {
    const dialogRef = this.dialog.open(DuolingoComponent, {
      // data: {name: this.name, animal: this.animal},
      height: '600px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.data == 'duolingo') {
        this.pteDialog();
      }
    });
  }

  //pte popup
  pteDialog(): void {
    const dialogRef = this.dialog.open(PteComponent, {
      // data: {name: this.name, animal: this.animal},
      height: '600px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.data == 'pte') {
        this.othersDialog();
      }
    });
  }

  //others popup
  othersDialog(): void {
    const dialogRef = this.dialog.open(OthersComponent, {
      // data: {name: this.name, animal: this.animal},
      height: '600px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // if(result.data=="others")
      // {
      //   this.toeflDialog();
      // }
    });
  }

  //gre popup
  greDialog(): void {
    const dialogRef = this.dialog.open(GreComponent, {
      // data: {name: this.name, animal: this.animal},
      height: '600px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // if(result.data=="others")
      // {
      //   this.toeflDialog();
      // }
    });
  }

  leveleducationchange() {
    console.log(this.secondaryInfoForm.value.leveleducation);
    if (this.secondaryInfoForm.value.leveleducation == 'Masters') {
      this.bacherlorsenable = false;
      this.mastersenable = true;
    } else {
      this.mastersenable = false;
      this.bacherlorsenable = true;
    }
  }
  onCountryChange(event: any) {
    this.areacode1 = event.dialCode;
  }
  telInputObject(event: any) {
    console.log('two');
  }
  getNumber(event: any) {
    console.log('three');
  }
  hasError(event: any) {
    console.log('four');
  }
}
