import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-userseatbookingpiechart',
  templateUrl: './userseatbookingpiechart.component.html',
  styleUrls: ['./userseatbookingpiechart.component.scss']
})
export class UserseatbookingpiechartComponent implements AfterViewInit {
  @ViewChild('pieChartCanvas') private pieChartCanvas!: ElementRef;

  pieChart: any;
  public seatbookingarraypie: any[] = [];

  constructor(private db: DbserviceService) { }

  ngAfterViewInit(): void {
    this.db.seatbookingpiechart().then((data: any) => {
      console.log(':', data);
      this.seatbookingarraypie = data;
      this.createPieChart();
    });
  }
  createPieChart(): void {
    if (this.seatbookingarraypie.length === 0) {
      return;
    }
  
    const statusOccurrences: Map<string, number> = new Map();
    this.seatbookingarraypie.forEach(user => {
      const label = `${user.bookingstatus} - ${user.college_name}`;
      statusOccurrences.set(label, (statusOccurrences.get(label) || 0) + 1);
    });
  
    const pieChartCanvas = this.pieChartCanvas.nativeElement.getContext('2d');
  
    this.pieChart = new Chart(pieChartCanvas, {
      type: 'pie',
      data: {
        labels: Array.from(statusOccurrences.keys()),
        datasets: [{
          data: Array.from(statusOccurrences.values()),
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(120, 10, 150, 0.7)',
            'rgba(80, 130, 180, 0.7)',
            'rgba(250, 100, 10, 0.7)',
            'rgba(130, 190, 60, 0.7)',
            'rgba(180, 20, 120, 0.7)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(120, 10, 150, 0.7)',
            'rgba(80, 130, 180, 0.7)',
            'rgba(250, 100, 10, 0.7)',
            'rgba(130, 190, 60, 0.7)',
            'rgba(180, 20, 120, 0.7)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  }
  
  
}
