import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-adminpaymentreport',
  templateUrl: './adminpaymentreport.component.html',
  styleUrls: ['./adminpaymentreport.component.scss']
})
export class AdminpaymentreportComponent implements OnInit {
  @ViewChild('TABLE', { static: false }) TABLE!: ElementRef;
  title = 'Excel';

  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'PaymentExcelReport.xlsx');
  }
  paymentarray: any[] = []; 
  paymentview!: FormGroup;
  login_id: any;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private dbservice: DbserviceService) {}
  successmsg:any;
  ngOnInit(): void {
    this.dbservice.adminpaymentview().then((data: any) => this.paymentarray = data);
  }
  calculateAdminAmount(advancesAmount: number): number {
    return (advancesAmount * 5) / 100;
  }
}
  