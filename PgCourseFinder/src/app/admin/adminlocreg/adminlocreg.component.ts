import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-adminlocreg',
  templateUrl: './adminlocreg.component.html',
  styleUrls: ['./adminlocreg.component.scss'] 
}) 
export class AdminlocregComponent {

  public DistrictArray:any=[]; 
  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) { }
  locationregformgroup=this.fb.group({
    dis_id:[''], 
    loc_name:['']

})
ngOnInit(): void { 
   this.dbservice.districtview().then((data:any)=>{
   this.DistrictArray=data;
})
}
onSubmit()
{
  console.log(this.locationregformgroup.value)
  this.dbservice.locationreg(this.locationregformgroup.value).then((confirmation:any)=>{ 
    if(confirmation.message == "Success")
    { 
      alert('Registered Successfully') 
      this.router.navigate(['adminmaster/adminlocreg'])
   } 
   else 
   { 
    alert('Data do not insert,please check')
   }

}
)}

}

