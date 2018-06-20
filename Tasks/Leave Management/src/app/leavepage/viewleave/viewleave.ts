import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from "./service";
import { CookieServices } from '../../common/cookie';
@Component({
    selector:'viewleave',
    templateUrl:`app/leavepage/viewleave/viewleave.html`,
    providers:[Service,CookieServices]
})
export class viewleave{
public userdata;
public comment:string;
sts_approve:string; 
sts_reject:string;
constructor(private router: Router,private viewservice: Service,private cookieservice:CookieServices){

    var leaveid=this.cookieservice.getCookie('leave_id')
    if (leaveid!= ''){
    this.viewservice.getdata(leaveid).then(user=>this.userdata=user);
    
  }


}
home(){
    this.router.navigate(['maindashboard/managerdashboard']);
}
approve(){
        
   
    var sts_approve='Approved';
    
    var leaveid=this.cookieservice.getCookie('leave_id')
    if (leaveid!= ''){
    this.viewservice.updatedata(leaveid,this.comment,sts_approve);
    this.router.navigate(['maindashboard/managerdashboard']);
    }
} 
reject(){
     var sts_reject='Reject';
    var leaveid=this.cookieservice.getCookie('leave_id')
    if (leaveid!= ''){
    this.viewservice.update1data(leaveid,this.comment,sts_reject);
    this.router.navigate(['maindashboard/managerdashboard']);
     }
}   
         
  
    
    
}






