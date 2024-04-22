import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-admineditugcourse',
  templateUrl: './admineditugcourse.component.html',
  styleUrls: ['./admineditugcourse.component.scss']
})
export class AdmineditugcourseComponent implements OnInit {
  ugcourse_id: any;
  public ugArray: any[] = [];
  ugcourseeditform!: FormGroup;
  selectedFiles?: FileList; 
  currentFile?: any;
  message = '';
  constructor(private fb: FormBuilder, private dbservice: DbserviceService, private router: Router, private route: ActivatedRoute) {
    route.paramMap.subscribe((Params: ParamMap) => {
      this.ugcourse_id = Params.get('ugcourse_id'); 
    });
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
    this.imageupload();
  }
  ngOnInit(): void {
    this.ugcourseeditform = this.fb.group({
      ugcourse_id: [''],
      ugcourse_name: [''],
      ugcourse_img: [''],
    });
    
  const ugcourse_id = this.ugcourse_id;
  console.log(ugcourse_id);

  this.dbservice.editugv({ ugcourse_id }).then((data: any) => {
    this.ugArray = data;
    console.log(this.ugArray);
    if (data.length > 0) {
      this.ugcourseeditform.patchValue({
        ugcourse_id: data[0].ugcourse_id,
        ugcourse_name: data[0].ugcourse_name,
        ugcourse_img: data[0].ugcourse_img,
      });
    }
  });
}

onSubmit() {
  if (!this.ugcourseeditform.value.ugcourse_img) {
    const data = {
      ugcourse_id: this.ugcourseeditform.value.ugcourse_id,
      ugcourse_img: this.ugArray[0].ugcourse_img,
    };

    this.dbservice.updateugdata(data).then((confirmation: any) => {
      alert(' Details Updated Successfully');
      this.router.navigate(['/adminmaster/adminugcourseview']);
    });
  } else {
    this.dbservice.updateugdata(this.ugcourseeditform.value).then((confirmation: any) => {
      alert(' Details Updated Successfully');
      this.router.navigate(['/adminmaster/adminugcourseview']);
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
    this.ugcourseeditform.patchValue({
      ugcourse_img: this.currentFile.name,
    });

    console.log(this.ugcourseeditform.value);
  }
}

}