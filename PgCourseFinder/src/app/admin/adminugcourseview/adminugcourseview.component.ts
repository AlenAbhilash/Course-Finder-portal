import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-adminugcourseview',
  templateUrl: './adminugcourseview.component.html',
  styleUrls: ['./adminugcourseview.component.scss']
})
export class AdminugcourseviewComponent { 
  public ugdataArray: any[] = [];
  uggroup!: FormGroup;

  constructor(private fb: FormBuilder, private db: DbserviceService) { }

  ngOnInit(): void {
    this.uggroup = this.fb.group({});

    this.db.uggview().then((data: any) => {
      this.ugdataArray = data;
    });
  }
  deleteugcourse(ugcourse_id: string) {
    this.db.deleteugcourse({ ugcourse_id }).then((confirmation: any) => {
      if (confirmation.message === "Success") {
        alert('Successfully Deleted');
        this.ngOnInit();
      }
    });
  }
}
 