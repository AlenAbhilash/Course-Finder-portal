import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-collegeprofileedit',
  templateUrl: './collegeprofileedit.component.html',
  styleUrls: ['./collegeprofileedit.component.scss']
})
export class CollegeprofileeditComponent implements OnInit{
  public login_id: any;
  public collegeprofileeditarray: any[] = []; 
  public diseditarray: any[] = [];
  public loceditarray: any[] = [];
  collegeprofile!: FormGroup;
  selectedFiles?: FileList;
  currentFile?: any;
  message = ''; 

  constructor(private fb: FormBuilder, private dbservice: DbserviceService, private router: Router, private route: ActivatedRoute) {
    route.paramMap.subscribe((Params: ParamMap) => {
      this.login_id = Params.get('login_id');
    });
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
    this.imageupload();
  }

  ngOnInit(): void {
    this.collegeprofile = this.fb.group({
      login_id:this.login_id, 
      college_name: [''],
      email: [''],
      phone: [''],
      dis_id: [''], 
      loc_id: [''],
      Address: [''],
      pincode: [''],
      website: [''],
      type: [''],
      college_imge: [''],
    });
    this.dbservice.districtview().then((data: any) => {
      this.diseditarray = data.sort((a, b) => a.dis_name.localeCompare(b.dis_name));
      this.collegeprofile.get('dis_id')?.valueChanges.subscribe((dis_id) => {
        this.dbservice.ulocationviews({ dis_id }).then((data: any) => {
          this.loceditarray = data.sort((a, b) => a.loc_name.localeCompare(b.loc_name));
          console.log(this.loceditarray)
        });
      });
    })
    const login_id = this.login_id;
    console.log(login_id);

    this.dbservice.collegeprofileedit({ login_id }).then((data: any) => {
      this.collegeprofileeditarray = data;
      console.log(this.collegeprofileeditarray);
      if (data.length > 0) {
        this.collegeprofile.patchValue({
          college_name: data[0].college_name,
          email: data[0].email,  
          phone: data[0].phone,  
          dis_id: data[0].dis_id,
          loc_id: data[0].loc_id,
          Address: data[0].Address,
          pincode: data[0].pincode,
          website: data[0].website,
          type: data[0].type,
          college_imge: data[0].college_imge,
        });
      }
    });
  }
  Onsubmit() {

    if (!this.collegeprofile.value.college_imge) {
      const data = {
        college_name: this.collegeprofile.value.college_name,
        email: this.collegeprofile.value.email,
        phone: this.collegeprofile.value.phone,
        dis_id: this.collegeprofile.value.dis_id,
        loc_id: this.collegeprofile.value.loc_id,
        Address: this.collegeprofile.value.Address,
        pincode: this.collegeprofile.value.pincode,
        website: this.collegeprofile.value.website,
        type: this.collegeprofile.value.type,
        college_imge:this.collegeprofile.value.college_imge,
        login_id:this.collegeprofile.value.login_id
      }
      console.log("If Block",this.collegeprofile.value)

      this.dbservice.updatecollegeprofile(data).then((confimation: any) => {
        if (confimation.message == 'Success') {
          alert("Profile Updated")
          this.router.navigate(['collegemaster/collegedetailsview'])
        }

      })
    }
    else {
      console.log("Else block",this.collegeprofile.value)
      this.dbservice.updatecollegeprofile(this.collegeprofile.value).then((confirmation: any) => {
        console.log(confirmation)
        if (confirmation.message == 'Success') {
          alert("Profile Updated")
          this.router.navigate(['collegemaster/collegedetailsview'])
        }
      })

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
          });
          this.collegeprofile.value.college_imge=this.currentFile.name;
          console.log(this.currentFile.name)
      }}}
}

 