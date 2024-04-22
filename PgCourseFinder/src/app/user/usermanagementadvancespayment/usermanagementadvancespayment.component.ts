import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-usermanagementadvancespayment',
  templateUrl: './usermanagementadvancespayment.component.html',
  styleUrls: ['./usermanagementadvancespayment.component.scss']
})
export class UsermanagementadvancespaymentComponent implements OnInit{
  advancespayment!: FormGroup;
  login_id: any; 
  validationstatus = null;
  seatbooking_id	: any;
  public advancespaymentarray: any[] = [];
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private dbservice: DbserviceService)
   {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.seatbooking_id	 = params.get('seatbooking_id	');
    });
  }
  ngOnInit(): void { 

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.seatbooking_id = params.get('seatbooking_id');
    });
    this.advancespayment = this.fb.group({
      facc: ['',[Validators.required]],
      seatbooking_id:this.seatbooking_id,
      login_id: this.login_id = localStorage.getItem("login_id")
    });
    const seatbooking_id = this.seatbooking_id;
    console.log(seatbooking_id);
    this.login_id = localStorage.getItem("login_id");
    if (this.login_id) {
      this.dbservice.advancespaymentaccepte(this.login_id).then((data: any) => {
        this.advancespaymentarray = data;
      });
    }
  }
  onSubmit()
{
  if(this.advancespayment.invalid){
    this.validationstatus ="";
    alert('Please Enter data')

    return
  } 
else{
  this.validationstatus =null;
  console.log(this.advancespayment.value);
}  
  console.log(this.advancespayment.value);
  this.dbservice.paymentform(this.advancespayment.value).then((confirmation: any) => {
    if (confirmation.message === 'Success') {
      alert('Payment  Successfully');
      this.router.navigate(['usermaster/userhome']);
    } else {
      alert('Data did not insert, please check');
    }
  })
}
}
 