import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({ 
  selector: 'app-admincategory',
  templateUrl: './admincategory.component.html',
  styleUrls: ['./admincategory.component.scss']
})
export class AdmincategoryComponent { 
  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) { }

  categoryregfrom = this.fb.group({
    category_name: ['']
  });

  onSubmit() {
    console.log(this.categoryregfrom.value);
    this.dbservice.categoryregfrom(this.categoryregfrom.value).then((confirmation: any) => {
      if (confirmation.message === 'Success') {
        alert('Registered Successfully');
        this.router.navigate(['adminmaster/categoryreg']);
      } else {
        alert('Data did not insert, please check');
      }
    })
  }
}
