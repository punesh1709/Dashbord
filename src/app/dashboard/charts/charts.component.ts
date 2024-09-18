import { Component, OnInit, OnDestroy } from '@angular/core';
import * as echarts from 'echarts';
import { UserData } from '../tables/table1/table1.component';
import { DataSharingService } from '../../services/data-sharing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit, OnDestroy {
  chartInstance: any;
  chartOptions: any;
  userData: UserData[] = [];
  private dataChangeSubscription: Subscription = new Subscription(); // Initialize with an empty Subscription

  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit(): void {
    this.loadChartData();
    this.dataChangeSubscription = this.dataSharingService.dataUpdated$.subscribe(() => {
      this.loadChartData();
      this.updateChart();
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    if (this.dataChangeSubscription) {
      this.dataChangeSubscription.unsubscribe();
    }
  }

  loadChartData(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '[]');
    const names = this.userData.map((user) => user.name);
    const salaries = this.userData.map((user) => user.salary);
    const incrementedSalaries = this.userData.map((user) => user.incrementedSalary);

    this.chartOptions = {
      tooltip: { trigger: 'item' },
      legend: { orient: 'vertical', left: 'left' },
      series: [
        {
          name: 'Salary',
          type: 'pie',
          radius: ['50%', '70%'], // Creates the donut effect
          data: names.map((name, index) => ({
            value: salaries[index],
            name: `${name} Salary`,
          })),
          itemStyle: {
            color: (params: any) => {
              const colors = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de']; // Multiple colors
              return colors[params.dataIndex % colors.length];
            },
          },
        },
        {
          name: 'Incremented Salary',
          type: 'pie',
          radius: ['30%', '50%'], // Creates a nested donut
          data: names.map((name, index) => ({
            value: incrementedSalaries[index],
            name: `${name} Incremented Salary`,
          })),
          itemStyle: {
            color: (params: any) => {
              const colors = ['#ff6f61', '#6b5b95', '#88b04b', '#f7cac9', '#92a8d1']; // Multiple colors
              return colors[params.dataIndex % colors.length];
            },
          },
        },
      ],
    };
  }

  onChartInit(event: any) {
    this.chartInstance = event;
  }

  updateChart(): void {
    if (this.chartInstance) {
      this.chartInstance.setOption(this.chartOptions, true);
    }
  }
}
