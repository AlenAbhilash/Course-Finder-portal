import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminmasterComponent } from './admin/adminmaster/adminmaster.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { GuestmasterComponent } from './guest/guestmaster/guestmaster.component';
import { GuesthomeComponent } from './guest/guesthome/guesthome.component';
import { GuestloginComponent } from './guest/guestlogin/guestlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmindisregComponent } from './admin/admindisreg/admindisreg.component';
import { AdminlocregComponent } from './admin/adminlocreg/adminlocreg.component';
import { AdminlocviewComponent } from './admin/adminlocview/adminlocview.component';
import { AdminugcourseComponent } from './admin/adminugcourse/adminugcourse.component';
import { AdminpgcourseComponent } from './admin/adminpgcourse/adminpgcourse.component';
import { AdmincategoryComponent } from './admin/admincategory/admincategory.component';
import { AdmincategoryviewComponent } from './admin/admincategoryview/admincategoryview.component';
import { AdminpgcourseviewComponent } from './admin/adminpgcourseview/adminpgcourseview.component';
import { AdminugcourseviewComponent } from './admin/adminugcourseview/adminugcourseview.component';
import { AdmindisviewComponent } from './admin/admindisview/admindisview.component';
import { AdminpossiblecourseComponent } from './admin/adminpossiblecourse/adminpossiblecourse.component';
import { AdminpossiblecourseviewComponent } from './admin/adminpossiblecourseview/adminpossiblecourseview.component';
import { AdmineditlocationComponent } from './admin/admineditlocation/admineditlocation.component';
import { AdmineditpgcourseComponent } from './admin/admineditpgcourse/admineditpgcourse.component';
import { AdmineditugcourseComponent } from './admin/admineditugcourse/admineditugcourse.component';
import { AdmineditcatComponent } from './admin/admineditcat/admineditcat.component';
import { AdmineditdisComponent } from './admin/admineditdis/admineditdis.component';
import { CollegemasterComponent } from './college/collegemaster/collegemaster.component';
import { CollegehomeComponent } from './college/collegehome/collegehome.component';
import { CollegeregComponent } from './guest/collegereg/collegereg.component';
import { CollegpgcourseComponent } from './college/collegpgcourse/collegpgcourse.component';
import { CollegepgcourseviewComponent } from './college/collegepgcourseview/collegepgcourseview.component';
import { CollegepossbileregComponent } from './college/collegepossbilereg/collegepossbilereg.component';
import { CollegepossiblecourseviewComponent } from './college/collegepossiblecourseview/collegepossiblecourseview.component';
import { CollegedetailsviewComponent } from './college/collegedetailsview/collegedetailsview.component';
import { CollegeseatComponent } from './college/collegeseat/collegeseat.component';
import { CollegeseatviewComponent } from './college/collegeseatview/collegeseatview.component';
import { CollegeeditseatComponent } from './college/collegeeditseat/collegeeditseat.component';
import { AdminconfirmationComponent } from './admin/adminconfirmation/adminconfirmation.component';
import { UserregComponent } from './guest/userreg/userreg.component';
import { UsermasterComponent } from './user/usermaster/usermaster.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { UsercollegeviewComponent } from './user/usercollegeview/usercollegeview.component';
import { UsercollegeviewmoreComponent } from './user/usercollegeviewmore/usercollegeviewmore.component';
import { UserseatregComponent } from './user/userseatreg/userseatreg.component';
import { CollegebookingpageComponent } from './college/collegebookingpage/collegebookingpage.component';
import { CollegebookingpageviewmoreComponent } from './college/collegebookingpageviewmore/collegebookingpageviewmore.component';
import { CollegebookingremarkComponent } from './college/collegebookingremark/collegebookingremark.component';
import { InterviewmanagementComponent } from './college/interviewmanagement/interviewmanagement.component';
import { UserbookingpageviewComponent } from './user/userbookingpageview/userbookingpageview.component';
import { CollegeacceptedremarkComponent } from './college/collegeacceptedremark/collegeacceptedremark.component';
import { CollegerejectedremarkComponent } from './college/collegerejectedremark/collegerejectedremark.component';
import { CollegebookingremarkothersComponent } from './college/collegebookingremarkothers/collegebookingremarkothers.component';
import { UsermanagementadvancespaymentComponent } from './user/usermanagementadvancespayment/usermanagementadvancespayment.component';
import { UesrpaymentviewComponent } from './user/uesrpaymentview/uesrpaymentview.component';
import { PossiblecoursepiechartreportComponent } from './admin/possiblecoursepiechartreport/possiblecoursepiechartreport.component';
import { AdminpaymentreportComponent } from './admin/adminpaymentreport/adminpaymentreport.component';
import { AdminuserreportComponent } from './admin/adminuserreport/adminuserreport.component';
import { AdmincollegereportComponent } from './admin/admincollegereport/admincollegereport.component';
import { AdmincollegeseatcoursereportComponent } from './admin/admincollegeseatcoursereport/admincollegeseatcoursereport.component';
import { AdminpaymentdatewisereportComponent } from './admin/adminpaymentdatewisereport/adminpaymentdatewisereport.component';
import { AdminuserregdatewiseComponent } from './admin/adminuserregdatewise/adminuserregdatewise.component';
import { UserforgotpasswordComponent } from './guest/userforgotpassword/userforgotpassword.component';
import { UserchangepasswordComponent } from './user/userchangepassword/userchangepassword.component';
import { CollegepaymentpageComponent } from './college/collegepaymentpage/collegepaymentpage.component';
import { CollegechangepasswordComponent } from './college/collegechangepassword/collegechangepassword.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { UserprofileeditComponent } from './user/userprofileedit/userprofileedit.component';
import { CollegeprofileeditComponent } from './college/collegeprofileedit/collegeprofileedit.component';
import { UserfiltercollegeComponent } from './user/userfiltercollege/userfiltercollege.component';
import { UserfiltercollegeugComponent } from './user/userfiltercollegeug/userfiltercollegeug.component';
import { UserseatbookingpiechartComponent } from './admin/userseatbookingpiechart/userseatbookingpiechart.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminmasterComponent,
    AdminhomeComponent, 
    GuestmasterComponent,
    GuesthomeComponent,
    GuestloginComponent,
    AdmindisregComponent,
    AdminlocregComponent,
    AdminlocviewComponent,
    AdminugcourseComponent,
    AdminpgcourseComponent,
    AdmincategoryComponent,
    AdmincategoryviewComponent,
    AdminpgcourseviewComponent,
    AdminugcourseviewComponent,
    AdmindisviewComponent,
    AdminpossiblecourseComponent,
    AdminpossiblecourseviewComponent,
    AdmineditlocationComponent,
    AdmineditpgcourseComponent,
    AdmineditugcourseComponent,
    AdmineditcatComponent,
    AdmineditdisComponent,
    CollegemasterComponent,
    CollegehomeComponent,
    CollegeregComponent,
    CollegpgcourseComponent,
    CollegepgcourseviewComponent,
    CollegepossbileregComponent,
    CollegepossiblecourseviewComponent,
    CollegedetailsviewComponent,
    CollegeseatComponent,
    CollegeseatviewComponent,
    CollegeeditseatComponent,
    AdminconfirmationComponent,
    UserregComponent,
    UsermasterComponent,
    UserhomeComponent,
    UsercollegeviewComponent,
    UsercollegeviewmoreComponent,
    UserseatregComponent,
    CollegebookingpageComponent,
    CollegebookingpageviewmoreComponent,
    CollegebookingremarkComponent,
    InterviewmanagementComponent,
    UserbookingpageviewComponent,
    CollegeacceptedremarkComponent,
    CollegerejectedremarkComponent,
    CollegebookingremarkothersComponent,
    UsermanagementadvancespaymentComponent,
    UesrpaymentviewComponent,
    PossiblecoursepiechartreportComponent,
    AdminpaymentreportComponent,
    AdminuserreportComponent,
    AdmincollegereportComponent,
    AdmincollegeseatcoursereportComponent,
    AdminpaymentdatewisereportComponent,
    AdminuserregdatewiseComponent,
    UserforgotpasswordComponent,
    UserchangepasswordComponent,
    CollegepaymentpageComponent,
    CollegechangepasswordComponent,
    UserprofileComponent,
    UserprofileeditComponent,
    CollegeprofileeditComponent,
    UserfiltercollegeComponent,
    UserfiltercollegeugComponent,
    UserseatbookingpiechartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, 
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
