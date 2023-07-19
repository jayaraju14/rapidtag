import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StudentService } from 'src/app/_services/student.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  @Output("nexStep") nexStep: EventEmitter<any> = new EventEmitter();
  fileName = 'upload';
  currentFile?: File;
  oldData:any
  documentData=[
  {name:"provisional certificate / Original degree",sub:"Proof of successfully completion of degree from (university Name)",status:false,imageUrl:'',field:'degree'},
  {name:"consolidated marks memo(CMM)",sub:"Proof of coursewise consolidated marks memo from (University name)",status:false,imageUrl:'',field:'cmm'},
  {name:"Acadamic Transcripts",sub:"Upload school transcripts for secondary and/or post-secondary education",status:false,imageUrl:'',field:'transcript'},
  {name:"English test scores",sub:"Official english language examination results that meet the requirements of the student's program",status:true,imageUrl:'',field:'eps'},
  {name:"GRE score card",sub:"Official GRE examination results that meet the requirements of students's program",status:true,imageUrl:'',field:'gre'},
  {name:"passport",sub:"Current valid passport",status:false,imageUrl:'',field:'passport'},
  {name:"Letter of recomondation 1",sub:"",status:false,imageUrl:'',field:'lor_1'},
  {name:"Letter of recomondation 2",sub:"",status:false,imageUrl:'',field:'lor_2'},
  {name:"Letter of recomondation 3",sub:"",status:false,imageUrl:'',field:'lor_3'},
  {name:"Statment of purpose",sub:"",status:false,imageUrl:'',field:'sop'},
  {name:"Resume",sub:"",status:false,imageUrl:'',field:'resume'},
]

users = [
  { id: 1, firstName: 'John', lastName: 'Doe', username: '@johndoe', profilePicture: '' },
  { id: 2, firstName: 'Jane', lastName: 'Doe', username: '@janedoe', profilePicture: '' },
  { id: 3, firstName: 'Mark', lastName: 'Smith', username: '@marksmith', profilePicture: '' }
];



displayedColumns: string[] = [ 'sub','type','status','upload'];
  dataSource = this.documentData;
  constructor(private _studentService:StudentService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.update()
  }
  selectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
      this.fileName = this.currentFile.name;
    } else {
      this.fileName = 'Select File';
    }
  }
  uploadPdf(event: any, user: any) {
  console.log(user)
    this.selectFile(event);
    if (this.currentFile) {
      const formData: FormData = new FormData();
      formData.append('doc', this.currentFile);
      this._studentService.uploaddocuments(user.field, formData).subscribe(
        (res) => {
          if (res) {
            // this.fileNames[buttonId] = this.fileName;
            console.log(res)
            this.update()
            this.cdr.detectChanges();

          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
    
  }
  update()
  {
    this._studentService.getStudentDocDetails().subscribe(res=>{
      this.oldData=res
      console.log(res)
    })
  }
  nextstep()
  {
    // this.nextStep.emit();
    this.nexStep.emit()
  }

  onFileSelected(event: any, user: any) {
    const file: File = event.target.files[0];
    const allowedTypes = ['application/pdf', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      // Show error message
      alert('Please select a PDF file.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e: any) => {
      user.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }


}
