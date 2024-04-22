import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-admindisview', 
  templateUrl: './admindisview.component.html',
  styleUrls: ['./admindisview.component.scss']
})
export class AdmindisviewComponent implements OnInit {
  public disdataArray: any[] = []; 
  disgroup!: FormGroup;

  constructor(private fb: FormBuilder, private db: DbserviceService) { }

  ngOnInit(): void { 
    this.disgroup = this.fb.group({});
    this.db.disview().then((data: any) => {
      this.disdataArray = data;
    });
  } 

  deletedis(dis_id: string) {
    if(confirm('do you want to delete')){
      this.db.deletedis({ dis_id }).then((confirmation: any) => {
        if (confirmation.message === "Success") {
          alert('Successfully Deleted');
          this.ngOnInit();
        }
      });
    }
  }
} 
