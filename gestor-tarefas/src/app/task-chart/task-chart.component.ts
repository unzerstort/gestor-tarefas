import { Component, OnInit } from '@angular/core';
import Chart, { LineElement, Scale } from 'chart.js/auto';

@Component({
  selector: 'app-task-chart',
  templateUrl: './task-chart.component.html',
  styleUrls: ['./task-chart.component.scss'],
  standalone: true
})
export class TaskChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }
  public chart: any;

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
        datasets: [
          {
            label: "Tarefas",
            data: ['0', '2', '1', '3', '0',
              '5', '2', '3'],
            backgroundColor: "#4AD894",
            borderColor: "#4AD894",
            pointRadius: 5,
            pointHoverRadius: 10,
            hoverBackgroundColor: "#4AD894",
            hoverBorderColor: "#4AD894",
          }
        ]
      },
      options: {
        aspectRatio: 3,
        responsive: true,
        
        plugins: {
          tooltip: {
            xAlign: "right",
            backgroundColor: "#FFFFFF",
            bodyColor: "#263238",
            titleColor: "#263238",
            boxWidth: 150,
            boxHeight: 100,
            cornerRadius: 10,
            caretSize: 0,
            caretPadding: 11,
            displayColors: false,
            rtl: false
          },
          legend: {
            display: false,
          }

        },
        elements: {
          line: {
            tension: 0.4,
            hoverBorderColor: "#4AD894",
          }
        },
      }
    });
  }

}