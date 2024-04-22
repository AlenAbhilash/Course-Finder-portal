import { Component, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { AdminmasterComponent } from './admin/adminmaster/adminmaster.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { GuestmasterComponent } from './guest/guestmaster/guestmaster.component';
import { GuesthomeComponent } from './guest/guesthome/guesthome.component';
import { GuestloginComponent } from './guest/guestlogin/guestlogin.component';
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
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
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

const routes: Routes = [{
  path: 'adminmaster', component: AdminmasterComponent,
  children: [
    { path: 'adminhome', component: AdminhomeComponent, },
    { path: 'admindisreg', component: AdmindisregComponent },
    { path: 'adminlocreg', component: AdminlocregComponent },
    { path: 'adminlocview', component: AdminlocviewComponent },
    { path: 'adminugcourse', component: AdminugcourseComponent },
    { path: 'adminpgcourse', component: AdminpgcourseComponent },
    { path: 'admincategory', component: AdmincategoryComponent },
    { path: 'admincategoryview', component: AdmincategoryviewComponent },
    { path: 'adminpgcourseview', component: AdminpgcourseviewComponent },
    { path: 'adminugcourseview', component: AdminugcourseviewComponent },
    { path: 'admindisview', component: AdmindisviewComponent },
    { path: 'adminpossiblecourse', component: AdminpossiblecourseComponent },
    { path: 'adminpossiblecourseview', component: AdminpossiblecourseviewComponent },
    { path: 'admineditlocation/:loc_id', component: AdmineditlocationComponent },
    { path: 'admineditpgcourse/:pgcourse_id', component: AdmineditpgcourseComponent },
    { path: 'admineditugcourse/:ugcourse_id', component: AdmineditugcourseComponent },
    { path: 'admineditcat/:category_id', component: AdmineditcatComponent },
    { path: 'admineditdis/:dis_id', component: AdmineditdisComponent },
    { path:'adminconfirmation',component:AdminconfirmationComponent},
    {path: 'possiblecoursepiechartreport',component:PossiblecoursepiechartreportComponent},
    {path:'adminpaymentreport',component:AdminpaymentreportComponent},
    {path:'adminuserreport',component:AdminuserreportComponent},
    {path:'admincollegereport',component:AdmincollegereportComponent},
    {path:'admincollegeseatcoursereport',component:AdmincollegeseatcoursereportComponent},
    {path:'adminpaymentdatewisereport',component:AdminpaymentdatewisereportComponent},
    {path:'adminuserregdatewise',component:AdminuserregdatewiseComponent},
    {path:'userseatbookingpiechart',component:UserseatbookingpiechartComponent}
  ]
},

{ path: '', redirectTo: 'guestmaster/guesthome', pathMatch: 'full' },

{
  path: 'guestmaster', component: GuestmasterComponent,
  children: [
    { path: 'guesthome', component: GuesthomeComponent },
    { path: 'guestlogin', component: GuestloginComponent },
    {path:'collegereg',component: CollegeregComponent},
    {path:'userreg',component: UserregComponent},
    {path:'userforgotpassword',component:UserforgotpasswordComponent}
  ]
},
{
  path: 'collegemaster', component: CollegemasterComponent,

  children: [
    { path: 'collegehome', component: CollegehomeComponent },
    { path:'collegpgcourse',component:CollegpgcourseComponent},
    {path:'collegepgcourseview',component:CollegepgcourseviewComponent},
    {path:'collegepossbilereg',component:CollegepossbileregComponent},
    {path:'collegepossiblecourseview',component:CollegepossiblecourseviewComponent},
    {path:'collegedetailsview',component:CollegedetailsviewComponent},
    {path:'collegeseat',component:CollegeseatComponent},
    {path:'collegeseatview',component:CollegeseatviewComponent},
    {path:'collegeeditseat/:seat_id',component:CollegeeditseatComponent},
    {path:'collegebookingpage',component:CollegebookingpageComponent},
    {path:'collegebookingpageviewmore/:collegepgcourse_id',component:CollegebookingpageviewmoreComponent},
    {path:'collegebookingremark/:seatbooking_id',component:CollegebookingremarkComponent},
    {path:'interviewmanagement',component:InterviewmanagementComponent},
    {path:'collegeacceptedremark/:seatbooking_id',component:CollegeacceptedremarkComponent},
    {path:'collegerejectedremark/:seatbooking_id',component:CollegerejectedremarkComponent},
    {path:'collegebookingremarkothers/:seatbooking_id',component:CollegebookingremarkothersComponent},
    {path:'collegepaymentpage',component:CollegepaymentpageComponent},
    {path:'collegechangepassword',component:CollegechangepasswordComponent},
    {path:'collegeprofileedit/:login_id',component:CollegeprofileeditComponent}
   
    
] 
},
{
  path: 'usermaster', component: UsermasterComponent,
  children:[
    {path: 'userhome', component: UserhomeComponent},
    {path: 'usercollegeview', component: UsercollegeviewComponent},
    {path: 'usercollegeviewmore/:college_id', component: UsercollegeviewmoreComponent},
    {path: 'userseatreg/:college_id', component: UserseatregComponent },
    {path:'userbookingpageview',component: UserbookingpageviewComponent},
    {path:'usermanagementadvancespayment/:seatbooking_id',component:UsermanagementadvancespaymentComponent},
    {path:'uesrpaymentview',component:UesrpaymentviewComponent},
    {path:'userchangepassword',component:UserchangepasswordComponent},
    {path:'userprofile',component:UserprofileComponent},
    {path:'userprofileedit/:login_id',component:UserprofileeditComponent},
    {path:'userfiltercollege',component:UserfiltercollegeComponent},
    {path:'userfiltercollegeug/:ugcourse_id',component:UserfiltercollegeugComponent}
  ]
}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
