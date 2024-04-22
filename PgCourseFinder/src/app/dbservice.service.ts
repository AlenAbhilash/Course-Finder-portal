import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post("http://localhost:3000/login", data).toPromise();
  }

  disregform(data: any) {
    return this.http.post("http://localhost:3000/disregform", data).toPromise();
  }

  locationreg(data: any) {
    return this.http.post("http://localhost:3000/locationreg", data).toPromise();
  }

  districtview() {
    return this.http.get("http://localhost:3000/districtview").toPromise();
  }
  locationview(data: any) {
    return this.http.post("http://localhost:3000/locationview", data).toPromise();
  }
  deleteloc(data: any) {
    return this.http.post("http://localhost:3000/deleteloc", data).toPromise();
  }
  ugregform(data: any) {
    return this.http.post("http://localhost:3000/ugregform", data).toPromise();
  }

  upload(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file);

    // Enclose the URL in quotes
    const req = new HttpRequest('POST', 'http://localhost:3000/upload', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
  ugview() {
    return this.http.get("http://localhost:3000/ugview").toPromise();
  }
  pgregform(data: any) {
    return this.http.post("http://localhost:3000/pgregform", data).toPromise();
  }
  categoryregfrom(data: any) {
    return this.http.post("http://localhost:3000/categoryregfrom", data).toPromise();
  }
  catview() {
    return this.http.get("http://localhost:3000/catview").toPromise();
  }
  collegepossibleviewforreg(data: any) {
    return this.http.post("http://localhost:3000/collegepossibleviewforreg", data).toPromise();
  }
  ugviews() {
    return this.http.get("http://localhost:3000/ugviews").toPromise();
  }
  pgview(data: any) {
    return this.http.post("http://localhost:3000/pgview", data).toPromise();
  }
  
  deletepg(data: any) {
    return this.http.post("http://localhost:3000/deletepg", data).toPromise();
  }
  uggview() {
    return this.http.get("http://localhost:3000/uggview").toPromise();
  }
  deletecate(data: any) {
    return this.http.post("http://localhost:3000/deletecate", data).toPromise();
  }
  disview() {
    return this.http.get("http://localhost:3000/disview").toPromise();
  }
  deleteugcourse(data: any) {
    return this.http.post("http://localhost:3000/deleteugcourse", data).toPromise();
  } 
  possibleview() {
    return this.http.get("http://localhost:3000/possibleview").toPromise();
  }
  possibleregform(data: any) {
    return this.http.post("http://localhost:3000/possibleregform", data).toPromise();
  }
  possiblesview(data: any) {
    return this.http.post("http://localhost:3000/possiblesview", data).toPromise();
  }
  deletepossible(data: any) {
    return this.http.post("http://localhost:3000/deletepossible", data).toPromise();
  }
  deletedis(data: any) {
    return this.http.post("http://localhost:3000/deletedis", data).toPromise(); 
  }
  getlocationdetails(data: any) {
    return this.http.post("http://localhost:3000/getlocationdetails", data).toPromise();
  }
  locationedit(data: any) {
    return this.http.post("http://localhost:3000/locationedit", data).toPromise();
  }
  updatepgdata(data: any) {
    return this.http.post("http://localhost:3000/updatepgdata", data).toPromise();
  }
  getpgdetails(data: any) {
    return this.http.post("http://localhost:3000/getpgdetails", data).toPromise();
  }
  editugv(data: any) {
    return this.http.post("http://localhost:3000/editugv", data).toPromise();
  }
  updateugdata(data: any) {
    return this.http.post("http://localhost:3000/updateugdata", data).toPromise();
  }
  catget(data: any) {
    return this.http.post("http://localhost:3000/catget", data).toPromise();
  }
  updatecatdata(data: any) {
    return this.http.post("http://localhost:3000/updatecatdata", data).toPromise();
  }
  disget(data: any) {
    return this.http.post("http://localhost:3000/disget", data).toPromise();
  }
  updatedisdata(data: any) {
    return this.http.post("http://localhost:3000/updatedisdata", data).toPromise();
  }
  collegereggroup(data: any) {
    return this.http.post("http://localhost:3000/collegereggroup", data).toPromise();
  }
  collegepgr(data: any) {
    return this.http.post("http://localhost:3000/collegepgr", data).toPromise();
  }
  collegepgv(login_id: any) {
    return this.http.get(`http://localhost:3000/collegepgv?login_id=${login_id}`).toPromise();
  }
  collegepossibleregv(login_id: any) {
    return this.http.get(`http://localhost:3000/collegepossibleregv?login_id=${login_id}`).toPromise();
  }
  collegepossiblereg(data: any) {
    return this.http.post("http://localhost:3000/collegepossiblereg", data).toPromise();
  }
  collegepossiblecourseview(login_id: any) {
    return this.http.get(`http://localhost:3000/collegepossiblecourseview?login_id=${login_id}`).toPromise();
  }
  deletecollegepg(data: any) {
    return this.http.post("http://localhost:3000/deletecollegepg", data).toPromise();
  }
  deletecollegepossible(data: any) {
    return this.http.post("http://localhost:3000/deletecollegepossible", data).toPromise();
  }
  collegeview(login_id: any) {
    return this.http.get(`http://localhost:3000/collegeview?login_id=${login_id}`).toPromise();
  }
  collegeseatreg(data: any) {
    return this.http.post("http://localhost:3000/collegeseatreg", data).toPromise();
  }
  collegeseatview(login_id: any) {
    return this.http.get(`http://localhost:3000/collegeseatview?login_id=${login_id}`).toPromise();
  }
  deletecollegeseat(data: any) {
    return this.http.post("http://localhost:3000/deletecollegeseat", data).toPromise();
  }
  collegeseatget(data: any) {
    return this.http.get("http://localhost:3000/collegeseatget", { params: data }).toPromise();
  }
  seatedit(data: any) {
    return this.http.post("http://localhost:3000/seatedit", data).toPromise();
  }
  admincollegeview() {
    return this.http.get("http://localhost:3000/admincollegeview").toPromise();
  }
  admincollegeaccepted(data: any) {
    return this.http.post("http://localhost:3000/admincollegeaccepted", data).toPromise();
  }
  admincollegerejected(data: any) {
    return this.http.post("http://localhost:3000/admincollegerejected", data).toPromise();
  }
  adminstatusview(data: any) {
    return this.http.post("http://localhost:3000/adminstatusview", data).toPromise();
  }
  userreggroup(data: any) {
    return this.http.post("http://localhost:3000/userreggroup", data).toPromise();
  }
  usercollegeview() {
    return this.http.get("http://localhost:3000/usercollegeview").toPromise();
  }
  usercollegepgcourseview() {
    return this.http.get("http://localhost:3000/usercollegepgcourseview").toPromise();
  }
  collegeviewmore(data: any) {
    return this.http.post("http://localhost:3000/collegeviewmore", data).toPromise();
  }
  possiblecollegecourse(data: any) {
    return this.http.post("http://localhost:3000/possiblecollegecourse", data).toPromise();
  }
  collegepgcourseview(data: any) {
    return this.http.post("http://localhost:3000/collegepgcourseview", data).toPromise();
  }
  collegepgcoursesem(data: any) {
    return this.http.post("http://localhost:3000/collegepgcoursesem", data).toPromise();
  }

  userbook(data: any) {
    return this.http.post("http://localhost:3000/userbook", data).toPromise();
  }

  collegepgcourseapplied(data: any) {
    return this.http.post("http://localhost:3000/collegepgcourseapplied", data).toPromise();
  }
  collegepgcourseappliedcat(data: any) {
    return this.http.post("http://localhost:3000/collegepgcourseappliedcat", data).toPromise();
  }
  collegeviewpg(data: any) {
    return this.http.post("http://localhost:3000/collegeviewpg", data).toPromise();
  }
  collegetypeview(data: any) {
    return this.http.post("http://localhost:3000/collegetypeview", data).toPromise();
  }
  collegeremark(data: any) {
    return this.http.post("http://localhost:3000/collegeremark", data).toPromise();
  }
  collegeseatregcat(data: any) {
    return this.http.post("http://localhost:3000/collegeseatregcat", data).toPromise();
  }
  collegeinterview(login_id: any) {
    return this.http.get(`http://localhost:3000/collegeinterview?login_id=${login_id}`).toPromise();
  }
  userbookingpage(login_id: any) {
    return this.http.get(`http://localhost:3000/userbookingpage?login_id=${login_id}`).toPromise();
  }
  userappliedbooking(data: any) {
    return this.http.post("http://localhost:3000/userappliedbooking", data).toPromise();
  }
  collegeacceptedremark(data: any) {
    return this.http.post("http://localhost:3000/collegeacceptedremark", data).toPromise();
  }
  collegerejectedremark(data: any) {
    return this.http.post("http://localhost:3000/collegerejectedremark", data).toPromise();
  }
  collegeothersremark(data: any) {
    return this.http.post("http://localhost:3000/collegeothersremark", data).toPromise(); 
  }
  advancespaymentaccepte(login_id: any) {
    return this.http.get(`http://localhost:3000/advancespaymentaccepte?login_id=${login_id}`).toPromise();
  }
  paymentform(data: any) {
    return this.http.post("http://localhost:3000/paymentform", data).toPromise();
  }
  userpaymentview(login_id: any) {
    return this.http.get(`http://localhost:3000/userpaymentview?login_id=${login_id}`).toPromise();
  }
  possibleviewpiechart() {
    return this.http.get("http://localhost:3000/possibleviewpiechart").toPromise();
  }
  adminpaymentview() {
    return this.http.get("http://localhost:3000/adminpaymentview").toPromise();
  }
  adminuserreport() {
    return this.http.get("http://localhost:3000/adminuserreport").toPromise();
  }
  adminseatcoursereport() {
    return this.http.get("http://localhost:3000/adminseatcoursereport").toPromise();
  }
  adminpaymentdataewise(data: any) {
    return this.http.post("http://localhost:3000/adminpaymentdataewise", data).toPromise()
  }
  adminuserregdataewise(data: any) {
    return this.http.post("http://localhost:3000/adminuserregdataewise", data).toPromise()
  }
  userforgetpassword(data: any) {
    return this.http.post("http://localhost:3000/userforgetpassword", data).toPromise()
  }
  userchangepassword(data: any) {
    return this.http.post("http://localhost:3000/userchangepassword", data).toPromise()
  }
  collegepaymentview(login_id: any) {
    return this.http.get(`http://localhost:3000/collegepaymentview?login_id=${login_id}`).toPromise();
  }
  userview(login_id: any) {
    return this.http.get(`http://localhost:3000/userview?login_id=${login_id}`).toPromise();
  }
  userprofileedit(data: any) {
    return this.http.post("http://localhost:3000/userprofileedit", data).toPromise();
  }
  ulocationviews(data: any) {
    return this.http.post("http://localhost:3000/ulocationviews", data).toPromise();
  }
  updateuserprofile(data: any) {
    return this.http.post("http://localhost:3000/updateuserprofile", data).toPromise();
  }
  collegeprofileedit(data: any) {
    return this.http.post("http://localhost:3000/collegeprofileedit", data).toPromise();
  }
  updatecollegeprofile(data: any) {
    return this.http.post("http://localhost:3000/updatecollegeprofile", data).toPromise();
  }
  collegefliterview(data: any) {
    return this.http.post("http://localhost:3000/collegefliterview", data).toPromise();
  }
  seatbookingpiechart() {
    return this.http.get("http://localhost:3000/seatbookingpiechart").toPromise();
  }
}   
