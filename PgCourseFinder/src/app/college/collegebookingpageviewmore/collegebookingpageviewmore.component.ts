import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-collegebookingpageviewmore',
  templateUrl: './collegebookingpageviewmore.component.html',
  styleUrls: ['./collegebookingpageviewmore.component.scss'] 
})
export class CollegebookingpageviewmoreComponent implements OnInit {
  public catdataArray: any[] = [];
  public seatdataArray: any[] = [];
  collegebookingpageviewmore!: FormGroup;
  collegepgcourse_id: any;
  public category_id: string = '';
  isCategoryTwo: boolean = false;


  login_id: any;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private db: DbserviceService, private router: Router) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.collegepgcourse_id = params.get('collegepgcourse_id');
    });
  }
  ngOnInit(): void {
    this.collegebookingpageviewmore = this.fb.group({
      category_id: [''], 
      category_name: [''],
    }); 
    const collegepgcourse_id = this.collegepgcourse_id;
    this.login_id = localStorage.getItem("login_id");
    if (this.login_id) {
      this.db.collegepgcourseapplied({ collegepgcourse_id, login_id: this.login_id }).then((data: any) => {
        this.catdataArray = data;
      });
    } 
  }  
  OnChange() {
    const category_id = this.collegebookingpageviewmore.value.category_id;
    this.category_id = category_id;
    this.login_id = localStorage.getItem("login_id");
    this.isCategoryTwo = (category_id === '2');

    if (this.login_id) {
        this.db.collegepgcourseappliedcat({ category_id, login_id: this.login_id }).then((data: any) => {
            this.seatdataArray = data;
        });
    } 
}
} 

