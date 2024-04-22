import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-userbookingpageview',
  templateUrl: './userbookingpageview.component.html',
  styleUrls: ['./userbookingpageview.component.scss']
})
export class UserbookingpageviewComponent implements OnInit {

  userbookingpage!: FormGroup;
  login_id: any;
  public allbooking: any[] = [];
  public appiledarray: any[] = [];
  public Scheduledinterview: any[] = [];
  public Acceptedarray: any[] = [];
  public Rejectedarray: any[] = [];
  public underconsiderationarray: any[] = [];
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private dbservice: DbserviceService) {
  }
  ngOnInit(): void {
    this.userbookingpage = this.fb.group({
      bookingstatus: ['']
    });
    this.login_id = localStorage.getItem("login_id");
    if (this.login_id) {
      this.dbservice.userbookingpage(this.login_id).then((data: any) => {
        this.allbooking = data;
      });
    }
  }
  OnChange(bookingstatus: string) {
    this.login_id = localStorage.getItem("login_id");
    if (this.login_id) {
      if (!bookingstatus) {
        this.appiledarray = this.allbooking;
        this.Scheduledinterview = [];
        this.Acceptedarray = [];
        this.Rejectedarray = [];
        this.underconsiderationarray = [];
      } else {
        this.dbservice.userappliedbooking({ login_id: this.login_id, bookingstatus }).then((data: any) => {
          this.appiledarray = [];
          this.Scheduledinterview = [];
          this.Acceptedarray = [];
          this.Rejectedarray = [];
          this.underconsiderationarray = [];
          if (bookingstatus === 'Scheduled interview') {
            this.Scheduledinterview = data;
          } else if (bookingstatus === 'applied') {
            this.appiledarray = data;
          } else if (bookingstatus === 'Accepted') {
            this.Acceptedarray = data;
          } else if (bookingstatus === 'Rejected') {
            this.Rejectedarray = data;
          } else if (bookingstatus === 'Under consideration') {
            this.underconsiderationarray = data;
          }
          else if (bookingstatus === 'booking completed') {
            this.underconsiderationarray = data;
          }
        });
      }
    }

    this.allbooking = [];
  }
} 