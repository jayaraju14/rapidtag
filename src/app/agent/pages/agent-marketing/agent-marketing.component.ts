import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-agent-marketing',
  templateUrl: './agent-marketing.component.html',
  styleUrls: ['./agent-marketing.component.scss']
})
export class AgentMarketingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  downloadPdf(pdfUrl: string, pdfName: string ) {
    //const pdfUrl = './assets/sample.pdf';
    //const pdfName = 'your_pdf_file';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}
