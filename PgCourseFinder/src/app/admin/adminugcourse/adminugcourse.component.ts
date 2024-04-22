import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-adminugcourse',
  templateUrl: './adminugcourse.component.html',
  styleUrls: ['./adminugcourse.component.scss']
})
export class AdminugcourseComponent {
  selectedFiles?: FileList;
  currentFile?: any; 
  currentFile1?: any;
  message = '';
  fileInfos?: Observable<any>;

  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) { }

  ugregform = this.fb.group({
    ugname: [''],
    ugimage: ['']
  });

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
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
    this.ugregform.value.ugimage = this.currentFile.name;

    console.log(this.ugregform.value);

    this.dbservice.ugregform(this.ugregform.value).then((confirmation: any) => {
      if (confirmation.message == 'Success') {
        alert("Registered Successfully");
        this.router.navigate(['adminmaster/adminugcourse']);
      } else {
        alert("Data do not insert, please check");
      }
    });
  }
}
