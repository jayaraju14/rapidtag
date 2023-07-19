import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentmain',
  templateUrl: './studentmain.component.html',
  styleUrls: ['./studentmain.component.scss']
})
export class StudentmainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onScroll(event:any) {
    // window.scroll(0,0);
 
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
 
     //or document.body.scrollTop = 0;
     //or document.querySelector('body').scrollTo(0,0)
     
 }

}
