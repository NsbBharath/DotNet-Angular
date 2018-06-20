import { Component } from '@angular/core';
import { Router}  from '@angular/router';
import {CookieServices} from '../../common/cookie';
import { employeedashboardservices,FilterPipe } from "./service";


@Component({
  selector: 'employeedashboard',
  templateUrl: 'employeedashboard.html',
  providers:[CookieServices,employeedashboardservices]
  
})

export class employeedashboard  {
  title = 'Leave Management';

  
p: number = 1;

logoutUser(val){
this.Cookieservice.deleteCookie('user_id');
this.router.navigate(['/login']);
  }
leave(){
  var userid=this.Cookieservice.getCookie('user_id') 
 
  if(userid !='' ){
      this.router.navigate(['leavepage/leaveform']);
  }else{
    this.router.navigate(['/login']);
  }
}

public userdata;
   

constructor(private router: Router,private Cookieservice:CookieServices,private dashservice:employeedashboardservices) 
{
 
  if(this.Cookieservice.getCookie('user_id')==''){
     this.router.navigate(['/login']);
    }
  var userid=this.Cookieservice.getCookie('user_id') 
  var roleid=this.Cookieservice.getCookie('user_role') 
  
  if (userid!= ''){
    this.dashservice.getdata(userid,roleid).then(user=>this.userdata=user);
  }




}



 



}