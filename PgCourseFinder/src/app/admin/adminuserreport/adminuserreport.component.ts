import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-adminuserreport',
  templateUrl: './adminuserreport.component.html',
  styleUrls: ['./adminuserreport.component.scss']
})
export class AdminuserreportComponent implements OnInit{ 
  @ViewChild('TABLE', { static: false }) TABLE!: ElementRef;
  title = 'Excel';
 
  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'UserExcelReport.xlsx');
  }
  userreortarray: any[] = [];
  userreport!: FormGroup;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private dbservice: DbserviceService) {}
  ngOnInit(): void {
    this.dbservice.adminuserreport().then((data: any) => this.userreortarray = data);
  }
}
 