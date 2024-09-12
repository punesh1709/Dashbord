// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-charts',
//   templateUrl: './charts.component.html',
//   styleUrl: './charts.component.css'
// })
// export class ChartsComponent {

// }



import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
//import { UserData } from '../table1/table1.component'; // Import the UserData interface
import { UserData } from '../tables/table1/table1.component';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  chartInstance: any;
  chartOptions: any;

  // Sample data that would be passed from the Table1Component
  userData: UserData[] = []; // Initialize an empty array for user data

  constructor() {}

  ngOnInit(): void {
    this.loadChartData();
  }

  // Method to load the chart data
  loadChartData(): void {
    // Sample data; replace with data from Table1Component
    this.userData = JSON.parse(localStorage.getItem('userData') || '[]');

    // Extract data for the chart
    const names = this.userData.map((user) => user.name);
    const salaries = this.userData.map((user) => user.salary);
    const incrementedSalaries = this.userData.map(
      (user) => user.incrementedSalary
    );

    // Set the chart options
    this.chartOptions = {
      title: {
        text: 'User Salary Comparison',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Salary', 'Incremented Salary'],
      },
      xAxis: {
        type: 'category',
        data: names,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Salary',
          type: 'bar',
          data: salaries,
          itemStyle: {
            color: '#5470c6',
          },
        },
        {
          name: 'Incremented Salary',
          type: 'bar',
          data: incrementedSalaries,
          itemStyle: {
            color: '#91cc75',
          },
        },
      ],
    };
  }

  // Method to initialize the chart
  onChartInit(event: any) {
    this.chartInstance = event;
  }
}
