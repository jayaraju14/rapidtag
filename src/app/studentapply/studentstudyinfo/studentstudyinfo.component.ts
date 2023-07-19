import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentstudyinfo',
  templateUrl: './studentstudyinfo.component.html',
  styleUrls: ['./studentstudyinfo.component.scss']
})
export class StudentstudyinfoComponent implements OnInit {
  selectedIndex: number = 0;
  maxNumberOfTabs=5
  progress=0
  constructor() {
    
   }

  ngOnInit(): void {
  }

  nextStep() {
    if (this.selectedIndex != this.maxNumberOfTabs) {
      this.selectedIndex = this.selectedIndex + 1;
    }
    console.log(this.selectedIndex);
  }
  onTabClick(tabIndex: number) {
    // Set progress to a value between 0 and 100 based on the tab index
    this.progress = (tabIndex + 1) * 50;
  }
  
}
