import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-admineditcat',
  templateUrl: './admineditcat.component.html',
  styleUrls: ['./admineditcat.component.scss']
})
export class AdmineditcatComponent implements OnInit  {
  category_id: any;
  public catArray: any[] = [];
  cateditform!: FormGroup;
  constructor(private fb: FormBuilder, private dbservice: DbserviceService, private router: Router, private route: ActivatedRoute) {
    route.paramMap.subscribe((Params: ParamMap) => {
      this.category_id = Params.get('category_id'); 
    });
  }
  ngOnInit(): void {
    this.cateditform = this.fb.group({
      category_id : [''],
      category_name: [''],
    
    });
    const category_id = this.category_id;
    console.log(category_id);
  
    this.dbservice.catget({ category_id }).then((data: any) => {
      this.catArray = data;
      console.log(this.catArray);
      if (data.length > 0) {
        this.cateditform.patchValue({
          category_id: data[0].category_id,
          category_name: data[0].category_name,
        });
      }
    });
  }

  onSubmit() {
    if (!this.cateditform.value.category_name) {
      const data = {
        category_id: this.cateditform.value.category_id,
        category_name: this.catArray[0].category_name,
      };
  
      this.dbservice.updatecatdata(data).then((confirmation: any) => {
        alert(' Details Updated Successfully');
        this.router.navigate(['/adminmaster/admincategoryview']);
      });
    } else {
      this.dbservice.updatecatdata(this.cateditform.value).then((confirmation: any) => {
        alert(' Details Updated Successfully');
        this.router.navigate(['/adminmaster/admincategoryview']);
      });
    }
  }

}
