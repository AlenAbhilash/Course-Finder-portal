import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-adminpossiblecourseview',
  templateUrl: './adminpossiblecourseview.component.html',
  styleUrls: ['./adminpossiblecourseview.component.scss']
})
export class AdminpossiblecourseviewComponent {

  public ugdataArray: any[] = [];
  public possibledataArray: any[] = [];
  possiblegroup!: FormGroup;

  constructor(private fb: FormBuilder, private db: DbserviceService, private router: Router) { }

  ngOnInit(): void {
    this.possiblegroup = this.fb.group({
      ugcourse_id: [''],
    });

    this.db.ugviews().then((data: any) => {
      this.ugdataArray = data;
    }); 
  }

  OnChange() {
    const ugcourse_id = this.possiblegroup.value.ugcourse_id;
    this.db.possiblesview({ ugcourse_id }).then((data: any) => {
      this.possibledataArray = data;
    });
  }
  deletepossible(possiblecourse_id: string) {
    if(confirm('do you want to delete')){
    this.db.deletepossible({ possiblecourse_id }).then((confirmation: any) => {
      if (confirmation.message === "Success") {
        alert('Successfully Deleted');
        this.OnChange();
      }
    });
  }
  }
}
 