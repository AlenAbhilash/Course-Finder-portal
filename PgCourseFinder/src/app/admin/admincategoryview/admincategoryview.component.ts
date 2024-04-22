import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-admincategoryview', 
  templateUrl: './admincategoryview.component.html',
  styleUrls: ['./admincategoryview.component.scss']
})
export class AdmincategoryviewComponent implements OnInit { 
  public catdataArray: any[] = []; 
  catgroup!: FormGroup;

  constructor(private fb: FormBuilder, private db: DbserviceService) { }

  ngOnInit(): void {
    this.catgroup = this.fb.group({});

    this.db.catview().then((data: any) => {
      this.catdataArray = data;
    });
  }
  deletecate(category_id: string) {
    if(confirm('do you want to delete')){
      this.db.deletecate({ category_id }).then((confirmation: any) => {
        if (confirmation.message === "Success") {
          alert('Successfully Deleted');
          this.ngOnInit();
        }
      });
    }
  }
}
