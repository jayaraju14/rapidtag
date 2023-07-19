import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-agent-performance',
  templateUrl: './agent-performance.component.html',
  styleUrls: ['./agent-performance.component.scss']
})
export class AgentPerformanceComponent implements OnInit {
  selectedValue: string;
  selectedCar: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'},
  ];  chartOptions = {
	  animationEnabled: true,
	  title:{
		text: "Performance Breakdown"
	  },
	  data: [{
		type: "doughnut",
		yValueFormatString: "#,###.##'%'",
		indexLabel: "{name}",
		dataPoints: [
		  { y: 28, name: "Admissions" },
		  { y: 10, name: "Applications" },
		  { y: 20, name: "Visa" },
		  { y: 15, name: "University" },
		  { y: 23, name: "Review" },
		  { y: 17, name: "Deposit Paid" },
		  { y: 12, name: "Draft" }
		]
	  }]
	}	

  chartOptions1 = {
	  animationEnabled: true,
	  title:{
		text: ""
	  },
	  axisX: {
		tickThickness: 0,
		interval: 1,
		intervalType: "year"
	  },
	  toolTip: {
		shared: true
	  },
	  axisY: {
		lineThickness: 0,
		tickThickness: 0,
		interval: 20
	  },
	  legend:{
		verticalAlign: "center",
		horizontalAlign: "right",
		reversed: true
	  },
	  data: [{        
		name: "Applications",
		showInLegend: true,
		type: "stackedColumn100", 
		color: "#004B8D ",
		dataPoints: [
		  {x: new Date(2017,0), y: 30},
		  {x: new Date(2018,0), y: 40},
		  {x: new Date(2019,0), y: 50},
		  {x: new Date(2020,0), y: 60}
		]
	  }, {        
		name: "Visa",
		showInLegend: true,
		type: "stackedColumn100", 
		color: "#0074D9 ",
		dataPoints: [
		  {x: new Date(2017,0), y: 40},
		  {x: new Date(2018,0), y: 28},
		  {x: new Date(2019,0), y: 18},
		  {x: new Date(2020,0), y: 12}
		]
	  }, {        
		name: "Approved",
		showInLegend: true,
		type: "stackedColumn100", 
		color: "#4192D9 ",
		dataPoints: [
		  {x: new Date(2017,0), y: 15},
		  {x: new Date(2018,0), y: 15},
		  {x: new Date(2019,0), y: 12},
		  {x: new Date(2020,0), y: 10}
		]
	  }, {        
		name: "Rejected",
		showInLegend: true,
		type: "stackedColumn100", 
		color: "#7ABAF2 ",
		dataPoints: [
		  {x: new Date(2017,0), y: 15},
		  {x: new Date(2018,0), y: 17},
		  {x: new Date(2019,0), y: 20},
		  {x: new Date(2020,0), y: 18}
		]
	  }]
	}	

  constructor() { }

  ngOnInit(): void {
  }

}
