import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-collegeeditseat',
  templateUrl: './collegeeditseat.component.html',
  styleUrls: ['./collegeeditseat.component.scss']
})
export class CollegeeditseatComponent implements OnInit {
  seat_id: any;
  public collegepgArray: any;
  public catArray: any;
  seateditform!: FormGroup;
  login_id: any;

  constructor(
    private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private dbservice: DbserviceService
  ) {
    route.paramMap.subscribe((params: ParamMap) => {
      this.seat_id = params.get('seat_id');
    });
  }

  ngOnInit(): void {
    this.seateditform = this.fb.group({
      collegepgcourse_id: [''],
      category_id: [''],
      seat_number: [''], 
      seat_id: [''],
    });
    this.login_id = localStorage.getItem("login_id");
    const seat_id = this.seat_id;
    this.dbservice.collegeseatget({ login_id: this.login_id, seat_id: seat_id }).then((data: any) => {
      console.log(data);
        this.seateditform.patchValue({
          collegepgcourse_id: data[0].collegepgcourse_id,
          category_id: data[0].category_id,
          seat_number: data[0].seat_number,
          seat_id: data[0].seat_id,
        });
    });
    this.dbservice.collegepgv(this.login_id).then((collegepgData: any) => {
      this.collegepgArray = collegepgData;

    });
    this.dbservice.catview().then((catData: any) => {
      this.catArray = catData;
    });
  }

  onSubmit() {
    this.dbservice.seatedit(this.seateditform.value).then((confirmation: any) => {
      if (confirmation.message === 'Success') {
        alert(' Details Updated');
        this.router.navigate(['/collegemaster/collegeseatview']);
      }
    });
  }
}