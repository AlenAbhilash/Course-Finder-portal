import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { DbserviceService } from 'src/app/dbservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements AfterViewInit {
  public collegearray: any[] = [];
  paymentarray: any[] = [];
  collegereportarray: any[] = [];
  userreortarray: any[] = [];
  paymentdatearray: any[] = []; 
  paymentdatewisereport: any;
  totalAdminAmount: number = 0;
  @ViewChild('pieChartCanvas') private pieChartCanvas!: ElementRef;
  pieChart: any;
  public seatbookingarraypie: any[] = [];

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private dbservice: DbserviceService) { }
  ngOnInit(): void {
    this.dbservice.adminpaymentview().then((data: any) => {
      this.paymentarray = data;
      this.totalAdminAmount = this.paymentarray.reduce(
        (total, data) => total + this.calculateAdminAmount(data.amount),
        0
      );
    });
    this.dbservice.admincollegeview().then((data: any) => this.collegereportarray = data);
    this.dbservice.adminuserreport().then((data: any) => this.userreortarray = data);
    this.paymentdatewisereport = this.fb.group({
      startdate: [''],
      enddate: ['']
    });
  }
  calculateAdminAmount(advancesAmount: number): number {
    return (advancesAmount * 5) / 100;
  }
  ngAfterViewInit(): void {
    this.dbservice.seatbookingpiechart().then((data: any) => {
      console.log(':', data);
      this.seatbookingarraypie = data;
      this.createPieChart();
    });
  }
  OnSubmit() {
    this.dbservice.adminpaymentdataewise(this.paymentdatewisereport.value).then((data: any) => {
      this.paymentdatearray = data;
      console.log(data)
    })
  }

  createPieChart(): void {
    if (this.seatbookingarraypie.length === 0) {
      return;
    }
  
    const statusOccurrences: Map<string, number> = new Map();
    this.seatbookingarraypie.forEach(user => {
      const label = `${user.bookingstatus}- ${user.college_name}`;
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