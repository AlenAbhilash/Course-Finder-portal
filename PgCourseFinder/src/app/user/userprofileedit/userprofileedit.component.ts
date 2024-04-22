import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-userprofileedit',
  templateUrl: './userprofileedit.component.html',
  styleUrls: ['./userprofileedit.component.scss']
})
export class UserprofileeditComponent  implements OnInit{
  public login_id: any;
  public userprofileeditarray: any[] = []; 
  public diseditarray: any[] = [];
  public loceditarray: any[] = [];
  userprofile!: FormGroup;
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
    this.userprofile = this.fb.group({
      login_id:this.login_id,
      user_name: [''],
      email: [''],
      phone: [''],
      dis_id: [''], 
      loc_id: [''],
      address: [''],
      pincode: [''],
      user_img: [''],
    });
    this.dbservice.districtview().then((data: any) => {
      this.diseditarray = data.sort((a, b) => a.dis_name.localeCompare(b.dis_name));
      this.userprofile.get('dis_id')?.valueChanges.subscribe((dis_id) => {
        this.dbservice.ulocationviews({ dis_id }).then((data: any) => {
          this.loceditarray = data.sort((a, b) => a.loc_name.localeCompare(b.loc_name));
          console.log(this.loceditarray)
        });
      });
    })
    const login_id = this.login_id;
    console.log(login_id);

    this.dbservice.userprofileedit({ login_id }).then((data: any) => {
      this.userprofileeditarray = data;
      console.log(this.userprofileeditarray);
      if (data.length > 0) {
        this.userprofile.patchValue({
          user_name: data[0].user_name,
          email: data[0].email,  
          phone: data[0].phone,  
          dis_id: data[0].dis_id,
          loc_id: data[0].loc_id,
          address: data[0].address,
          pincode: data[0].pincode,
          user_img: data[0].user_img,
        });
      }
    });
  }
  Onsubmit() {

    if (!this.userprofile.value.user_img) {
      const data = {
        user_name: this.userprofile.value.user_name,
        email: this.userprofile.value.email,
        phone: this.userprofile.value.phone,
        dis_id: this.userprofile.value.dis_id,
        loc_id: this.userprofile.value.loc_id,
        address: this.userprofile.value.address,
        pincode: this.userprofile.value.pincode,
        user_img:this.userprofile.value.user_img,
        login_id:this.userprofile.value.login_id
      }
      console.log("If Block",this.userprofile.value)

      this.dbservice.updateuserprofile(data).then((confimation: any) => {
        if (confimation.message == 'Success') {
          alert("Profile Updated")
          this.router.navigate(['usermaster/userprofile'])
        }

      })
    }
    else {
      console.log("Else block",this.userprofile.value)
      this.dbservice.updateuserprofile(this.userprofile.value).then((confirmation: any) => {
        console.log(confirmation)
        if (confirmation.message == 'Success') {
          alert("Profile Updated")
          this.router.navigate(['usermaster/userprofile'])
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
          this.userprofile.value.user_img=this.currentFile.name;
          console.log(this.currentFile.name)
      }}}
}
