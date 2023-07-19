import { Component, OnInit , AfterViewInit} from '@angular/core';
import { ScriptLoaderService } from '../../_services/script-loader.service';


interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(private _script: ScriptLoaderService) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this._script.load('./assets/js/scripts/dashboard_1_demo.js');
  }
}
