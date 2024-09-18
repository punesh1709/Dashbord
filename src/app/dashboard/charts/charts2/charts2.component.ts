import { Component, OnInit, Input } from '@angular/core';
import * as echarts from 'echarts';
import { Order } from '../../tables/table2/table2.component';
import { DataSharingService } from '../../../services/data-sharing.service';

@Component({
  selector: 'app-charts2',
  templateUrl: './charts2.component.html',
  styleUrls: ['./charts2.component.css']
})
export class Charts2Component implements OnInit {
 
  @Input() orders: Order[] = [];
  chartOptions: any = {};
  chart: any;

  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit(): void {
    // Subscribe to the orders observable
    this.dataSharingService.orders$.subscribe((orders: Order[]) => {
      this.orders = orders;
      this.updateChartOptions(); // Update the chart options whenever orders are changed
    });

    this.initChart();
  }

  initChart(): void {
    const chartElement = document.getElementById('chartContainer');
    if (chartElement) {
      this.chart = echarts.init(chartElement);
    }
    this.updateChartOptions();
  }

  updateChartOptions(): void {
    const orderNames = this.orders.map(order => order.orderName);
    const revenues = this.orders.map(order => order.revenue);
    const amounts = this.orders.map(order => order.amount);

    this.chartOptions = {
      title: {
        text: 'Order Overview',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Revenue', 'Amount'],
        top: '10%'
      },
      xAxis: {
        type: 'category',
        data: orderNames,
        axisLabel: {
          rotate: 45,
          formatter: (value: string) => `Order: ${value}`, // Adds a label to each order on the X-axis
          fontSize: 12,
          margin: 10 // Adds a margin between the label and the axis
        },
        name: 'Order Names', // Label for the X-axis
        nameLocation: 'middle',
        nameGap:55, // Gap between the axis and the label (simulates top margin)
        nameTextStyle: {
          fontSize: 14,
          fontWeight: 'bold'
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} USD', // Label each value as USD
          fontSize: 12
        },
        name: 'Revenue and Amount (USD)', // Label for the Y-axis
        nameLocation: 'middle',
        nameGap: 82, // Gap between the axis and the name
        nameTextStyle: {
          fontSize: 14,
          fontWeight: 'bold'
        }
      },
      series: [
        {
          name: 'Revenue',
          type: 'bar',
          data: revenues,
          color: '#42a5f5',
          label: {
            show: true,
            position: 'top',
            formatter: '{c} USD', // Display value above each bar with USD label
            fontSize: 10
          }
        },
        {
          name: 'Amount',
          type: 'bar',
          data: amounts,
          color: '#66bb6a',
          label: {
            show: true,
            position: 'top',
            formatter: '{c}', // Display value above each bar without unit label
            fontSize: 10
          }
        }
      ]
    };

    if (this.chart) {
      this.chart.setOption(this.chartOptions);
    }
  }
}
