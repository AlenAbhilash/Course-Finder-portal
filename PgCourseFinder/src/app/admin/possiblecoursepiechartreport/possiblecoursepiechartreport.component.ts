import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-possiblecoursepiechartreport',
  templateUrl: './possiblecoursepiechartreport.component.html',
  styleUrls: ['./possiblecoursepiechartreport.component.scss']
})
export class PossiblecoursepiechartreportComponent implements AfterViewInit {
  @ViewChild('pieChartCanvas') private pieChartCanvas!: ElementRef;

  pieChart: any;
  public pgcoursepie: any[] = [];

  constructor(private db: DbserviceService) { }
  
   ngAfterViewInit(): void {
    this.db.possibleviewpiechart().then((data: any) => {
      console.log(':', data);
      this.pgcoursepie = data;
      this.createPieChart();
    });
  }

  createPieChart(): void {
    if (this.pgcoursepie.length === 0) {
      return;
    }
  
    let aidedCount = 0;
    let unaidedCount = 0;
    let aidedCollegeNames: string[] = [];
    let unaidedCollegeNames: string[] = [];

    this.pgcoursepie.forEach(college => {
      if (college.type === 'aided') {
        aidedCount++;
        aidedCollegeNames.push(college.college_name,college.type);
      } else if (college.type === 'Unaided') {
        unaidedCount++;
        unaidedCollegeNames.push(college.college_name,college.type);
      }
    });

    const totalColleges = aidedCount + unaidedCount;
    const aidedPercentage = ((aidedCount / totalColleges) * 100).toFixed(2) + '%';
    const unaidedPercentage = ((unaidedCount / totalColleges) * 100).toFixed(2) + '%';
  
    const pieChartCanvas = this.pieChartCanvas.nativeElement.getContext('2d');
  
    this.pieChart = new Chart(pieChartCanvas, {
      type: 'pie',
      data: {
        labels: [
          `${aidedCollegeNames.join(', ')} (${aidedPercentage})`,
          `${unaidedCollegeNames.join(', ')} (${unaidedPercentage})`
        ],
        datasets: [{
          data: [aidedCount, unaidedCount],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
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
