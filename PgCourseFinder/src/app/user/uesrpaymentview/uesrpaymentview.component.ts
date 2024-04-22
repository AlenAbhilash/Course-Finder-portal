import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-uesrpaymentview',
  templateUrl: './uesrpaymentview.component.html',
  styleUrls: ['./uesrpaymentview.component.scss'] 
})
export class UesrpaymentviewComponent implements OnInit {
  paymentarray: any[] = [];
  paymentview!: FormGroup;
  login_id: any;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private dbservice: DbserviceService) {}
  ngOnInit(): void {
    this.paymentview = this.fb.group({ login_id: this.login_id = localStorage.getItem("login_id") });
    this.dbservice.userpaymentview(this.login_id).then((data: any) => this.paymentarray = data);
  }
  downloadPDF(index: number): void {
    const pdf = new jsPDF('p', 'mm', 'a4');
    pdf.setFontSize(18);
    pdf.setLineWidth(0.5);
    pdf.text('Payment Receipt', 10, 20);
    pdf.line(10, 22, 80, 22); 
    pdf.setLineWidth(0.2);
    pdf.setFontSize(12);
    const columns = [20, 50, 80, 110, 140, 170];
    let y = 20;
    const lineSpacing = 10;
    const data = this.paymentarray[index];
    pdf.text(`Student Name: ${data.user_name}`, columns[0], y += lineSpacing);
    pdf.text(`College Name: ${data.college_name}`, columns[0], y += lineSpacing);
    pdf.text(`Pgcourse Name: ${data.pgcourse_name}`, columns[0], y += lineSpacing);
    pdf.text(`Seat Registered: ${data.category_name}`, columns[0], y += lineSpacing);
    pdf.text(`Advance Amount: ${data.amount}`, columns[0], y += lineSpacing);
    pdf.text(`Booking Status: ${data.bookingstatus}`, columns[0], y += lineSpacing);
    const paymentDate = new Date(data.payment_date);
    pdf.text(`Payment Date: ${paymentDate.toLocaleDateString("en-US", { day: "numeric", month: "numeric", year: "numeric" })}`, columns[0], y += lineSpacing);
    const message = `Message: Your Advance Booking is complete. The class must start soon. The balance amount must be paid at the time of class starting.`;
    const messageLines: string[] = pdf.splitTextToSize(message, 160);
    messageLines.forEach((line: string) => {
      pdf.text(line, columns[0], y += lineSpacing);
    });
    pdf.save(`payment_receipt.pdf`);
  }
}
