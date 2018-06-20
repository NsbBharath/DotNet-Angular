import { Component } from '@angular/core';


import { Router}  from '@angular/router';

import {CookieServices} from '../../common/cookie';
import { managerdashboardservices } from "./service";
import { FilterPipe } from "../employeedashboard/service";
@Component({
  selector: 'managerdashboard',
  templateUrl: 'managerdashboard.html',
  providers:[CookieServices,managerdashboardservices]
})
export class managerdashboard {
  title = 'Leave Management';

p: number = 1;


logoutUser(val){
this.Cookieservice.deleteCookie('user_id');
this.router.navigate(['/login']);
  }


   public userdata;
 

constructor(private router: Router,private Cookieservice:CookieServices,private dashservice:managerdashboardservices) {
 
  if(this.Cookieservice.getCookie('user_id')==''){
     this.router.navigate(['/login']);
    }
  var userid=this.Cookieservice.getCookie('user_id') 
  var roleid=this.Cookieservice.getCookie('user_role') 
  
  if (userid!= ''){
    this.dashservice.getdata(userid,roleid).then(user=>this.userdata=user);
  }




}
view(LeaveManagement_ID){
  this.Cookieservice.setCookie('leave_id',LeaveManagement_ID, 1);
  var leaveid=this.Cookieservice.getCookie('leave_id')
  // alert(leaveid);
if(leaveid!=""){
      this.router.navigate(['leavepage/viewleave']);
  }else{
    this.router.navigate(['maindashboard/managerdashboard']);
  }
}
}


 



