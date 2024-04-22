import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-adminpgcourse',
  templateUrl: './adminpgcourse.component.html',
  styleUrls: ['./adminpgcourse.component.scss']
})
export class AdminpgcourseComponent {
  selectedFiles?: FileList;
  currentFile?: any;
  message = '';
  fileInfos?: Observable<any>;
 
  public UgArray: any[] = [];
  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) { }

  pgregform = this.fb.group({
    ugcourse_id: [''],
    pgcourse_name: [''], 
    pgcourse_img: ['']
  });

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  ngOnInit(): void {
    this.dbservice.ugview().then((data: any) => {
      this.UgArray = data;
    });
  }

  onSubmit() {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.dbservice.upload(this.currentFile).subscribe(
          (event: any) => {
            this.message = event.body.message;
          });
      }
    }
    this.pgregform.value.pgcourse_img = this.currentFile.name;
 
    console.log(this.pgregform.value);

    this.dbservice.pgregform(this.pgregform.value).then((confirmation: any) => {
      if (confirmation.message == 'Success') {
        alert("Registered Successfully");
        this.router.navigate(['adminmaster/adminpgcourse']);
      } else {
        alert("Data do not insert, please check");
      }
    });
  }
}
