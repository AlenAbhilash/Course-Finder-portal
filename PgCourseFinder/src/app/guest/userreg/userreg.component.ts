import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.scss']
})
export class UserregComponent implements OnInit {
  public DistrictdataArray: any[] = [];
  public LocationdataArray: any[] = [];
  userreggroup!: FormGroup;
  validationstatus = null;
  selectedFiles?: FileList;
  currentFile?: any;
  currentFile1?: any;
  message = '';
  fileInfos?: Observable<any>;

  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) { }

  ngOnInit(): void {
    this.userreggroup = this.fb.group({
      user_name: ['',[Validators.required,Validators.pattern(/^[A-Z][a-zA-z\s\w]*$/)]],
      email: ['',[Validators.required,Validators.email]],
      phone: ['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
      dis_id: ['', Validators.required],
      loc_id: ['', Validators.required],
      address: ['', Validators.required],
      pincode: ['',[Validators.required,Validators.pattern('^[0-9]{6}$')]],
      user_img: [''],
      username: ['',[Validators.required, Validators.pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/)]],
      password: ['',[Validators.required, Validators.pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      login_id: [''],
    });

    this.dbservice.districtview().then((data: any) => {
      this.DistrictdataArray = data;
    });

    this.userreggroup.get('dis_id')?.valueChanges.subscribe((dis_id) => {
      this.dbservice.locationview({ dis_id }).then((data: any) => {
        this.LocationdataArray = data;
      });
    });
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  onSubmit() {
    if(this.userreggroup.invalid){
      this.validationstatus ="";
      alert('Please Enter data')
  
      return
    } 
  else{
    this.validationstatus =null;
    console.log(this.userreggroup.value);
  }  
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
    this.userreggroup.value.ugimage = this.currentFile.name;

    console.log(this.userreggroup.value);

    this.dbservice.userreggroup(this.userreggroup.value).then((confirmation: any) => {
      if (confirmation.message === 'Success') {
        alert('Registered Successfully');
        this.router.navigate(['guestmaster/guestlogin']);
      } else {
        let alertMessage = '';
  
        if (confirmation.message === 'Entry already exists') {
          alertMessage = 'Entry already exists';
        } else {
          alertMessage = 'username is already used';
        }
        alert(alertMessage); 
      }
    });
  } 
}
 