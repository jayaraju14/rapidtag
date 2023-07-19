import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Chart } from 'chart.js';
import { StudentService } from 'src/app/_services/student.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  chart:any
  chart1:any
  stuCount:any
// 	chartOptions = {
// 	  title: {
// 		  text: "Monthly Sales Data"
// 	  },
// 	  theme: "light2",
// 	  animationEnabled: true,
// 	  exportEnabled: true,
// 	  axisY: {
// 		includeZero: true,
// 		valueFormatString: "$#,##0k"
// 	  },
// 	  data: [{
// 		type: "column", //change type to bar, line, area, pie, etc
// 		yValueFormatString: "$#,##0k",
// 		color: "#01b8aa",
// 		dataPoints: [
// 			{ label: "Jan", y: 172 },
// 			{ label: "Feb", y: 189 },
// 			{ label: "Mar", y: 201 },
// 			{ label: "Apr", y: 240 },
// 			{ label: "May", y: 166 },
// 			{ label: "Jun", y: 196 },
// 			{ label: "Jul", y: 218 },
// 			{ label: "Aug", y: 167 },
// 			{ label: "Sep", y: 175 },
// 			{ label: "Oct", y: 152 },
// 			{ label: "Nov", y: 156 },
// 			{ label: "Dec", y: 164 }
// 		]
// 	  }]
// 	}
//   chartOptions1 = {
// 	  animationEnabled: true,
// 	  title: {
// 		text: "Sales by Department"
// 	  },
// 	  data: [{
// 		type: "pie",
// 		startAngle: -90,
// 		indexLabel: "{name}: {y}",
// 		yValueFormatString: "#,###.##'%'",
// 		dataPoints: [
// 		  { y: 14.1, name: "Draf" },
// 		  { y: 28.2, name: "Review" },
// 		  { y: 57.7, name: "University Offer" },
// 		]
// 	  }]
// 	}	


  constructor(private _studentservice:StudentService) { 

  }

  ngOnInit() {
	
	this.chart = new Chart("canvas", {
		type: "bar",
		data: {
		  labels: ["Jan", "Feb", "Mar", "April", "May", "June"],
		  datasets: [ 
			{
			  label: "# of Applications",
			  data: [12, 19, 3, 5, 2, 3],
			  backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(255, 206, 86, 0.2)",
				"rgba(75, 192, 192, 0.2)",
				"rgba(153, 102, 255, 0.2)",
				"rgba(255, 159, 64, 0.2)"
			  ],
			  borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(75, 192, 192, 1)",
				"rgba(153, 102, 255, 1)",
				"rgba(255, 159, 64, 1)"
			  ],
			  borderWidth: 1
			}
		  ]
		},
		options: {
		  scales: {
			yAxes: [
			  {
				ticks: {
				  beginAtZero: true
				}
			  }
			]
		  }
		}
	  });
	  
	  this.chart1 = new Chart("canvas1", {
		type: "pie",
		data: {
		  labels: ["Applications", "University Offer", "Deposit Paid", "Visa Approved", "Review", "Draft"],
		  datasets: [
			{
			  label: "# of Applications",
			  data: [12, 19, 3, 5, 2, 3],
			  backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(255, 206, 86, 0.2)",
				"rgba(75, 192, 192, 0.2)",
				"rgba(153, 102, 255, 0.2)",
				"rgba(255, 159, 64, 0.2)"
			  ],
			  borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(75, 192, 192, 1)",
				"rgba(153, 102, 255, 1)",
				"rgba(255, 159, 64, 1)"
			  ],
			  borderWidth: 1
			}
		  ]
		},
		options: {
		  scales: {
			yAxes: [
			  {
				ticks: {
				  beginAtZero: true
				}
			  }
			]
		  }
		}
	  });
	  this.getstudents()
  }
  getstudents()
  {
	this._studentservice.getstudentDetailsByAgent().subscribe(res=>{
		this.stuCount=res.length
		console.log(res)
	})
  }

}
