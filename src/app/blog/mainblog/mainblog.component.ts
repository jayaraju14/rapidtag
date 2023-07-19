import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainblog',
  templateUrl: './mainblog.component.html',
  styleUrls: ['./mainblog.component.scss']
})
export class MainblogComponent implements OnInit {

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
