import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-admineditpgcourse',
  templateUrl: './admineditpgcourse.component.html',
  styleUrls: ['./admineditpgcourse.component.scss']
})
export class AdmineditpgcourseComponent implements OnInit {
  pgcourse_id: any;
  public pgArray: any[] = [];
  public UgArray: any[] = [];
  pgcourseeditform!: FormGroup;
  selectedFiles?: FileList;
  currentFile?: any;
  message = '';

  constructor(private fb: FormBuilder, private dbservice: DbserviceService, private router: Router, private route: ActivatedRoute) {
    route.paramMap.subscribe((Params: ParamMap) => {
      this.pgcourse_id = Params.get('pgcourse_id');
    });
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
    this.imageupload();
  }

  ngOnInit(): void {
    this.pgcourseeditform = this.fb.group({
      ugcourse_id: [''],
      pgcourse_name: [''],
      pgcourse_id: [''],
      pgcourse_img: [''],
    });

    const pgcourse_id = this.pgcourse_id;
    console.log(pgcourse_id);
    
    this.dbservice.getpgdetails({ pgcourse_id }).then((data: any) => {
      this.pgArray = data;
      console.log(this.pgArray);
      if (data.length > 0) {
        this.pgcourseeditform.patchValue({
          pgcourse_id: data[0].pgcourse_id,
          ugcourse_id: data[0].ugcourse_id,  
          pgcourse_name: data[0].pgcourse_name,
          pgcourse_img: data[0].pgcourse_img,
        });
      }
    });
    
    this.dbservice.ugview().then((data: any) => {
      this.UgArray = data;
      if (this.UgArray.length > 0) {

        const selectedUgcourse = this.UgArray.find((ugcourse) => ugcourse.ugcourse_id === this.pgcourseeditform.value.ugcourse_id);
        this.pgcourseeditform.patchValue({
          ugcourse_id: selectedUgcourse ? selectedUgcourse.ugcourse_id : null,  
        });
      }
    });
  }

  onSubmit() {
    if (!this.pgcourseeditform.value.pgcourse_img) {
      const data = {
        pgcourse_id: this.pgcourseeditform.value.pgcourse_id,
        pgcourse_img: this.pgArray[0].pgcourse_img, 
      };

      this.dbservice.updatepgdata(data).then((confirmation: any) => {
        alert(' Details Updated Successfully');
        this.router.navigate(['/adminmaster/adminpgcourseview']);
      });
    } else {
      this.dbservice.updatepgdata(this.pgcourseeditform.value).then((confirmation: any) => {
        alert(' Details Updated Successfully');
        this.router.navigate(['/adminmaster/adminpgcourseview']);
      });
    }
  }

  imageupload() {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;
        console.log(this.currentFile);
        this.dbservice.upload(this.currentFile).subscribe(
          (event: any) => {
            this.message = event.body.message;
          }
        );
      }

      this.pgcourseeditform.patchValue({
        pgcourse_img: this.currentFile.name,
      });

      console.log(this.pgcourseeditform.value);
    }
  }
}
