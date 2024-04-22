import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-collegepaymentpage',
  templateUrl: './collegepaymentpage.component.html',
  styleUrls: ['./collegepaymentpage.component.scss']
})
export class CollegepaymentpageComponent implements OnInit {
  @ViewChild('TABLE', { static: false }) TABLE!: ElementRef;
  title = 'Excel';

  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'collegePaymentExcelReport.xlsx');
  }
  collegepaymentarray: any[] = [];
  collegepaymentview!: FormGroup;
  login_id: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private dbservice: DbserviceService) {}

  ngOnInit(): void {
    this.login_id = localStorage.getItem("login_id");
    this.collegepaymentview = this.fb.group({
      login_id: [this.login_id]  
    });

    this.dbservice.collegepaymentview(this.login_id).then((data: any) => this.collegepaymentarray = data);
  }
  calculateAdminAmount(advancesAmount: number): number {
    return (advancesAmount * 5) / 100;
  }
}
