import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({ 
  selector: 'app-admindisreg',
  templateUrl: './admindisreg.component.html',
  styleUrls: ['./admindisreg.component.scss'] 
}) 
export class AdmindisregComponent {
  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) { }

  disregfrom = this.fb.group({
    dis_name: ['']
  });

  onSubmit() {
    console.log(this.disregfrom.value);
    this.dbservice.disregform(this.disregfrom.value).then((confirmation: any) => {
      if (confirmation.message === 'Success') {
        alert('Registered Successfully');
        this.router.navigate(['adminmaster/categoryreg']);
      } else {
        alert('Data did not insert, please check');
      }
    })
  }
}
