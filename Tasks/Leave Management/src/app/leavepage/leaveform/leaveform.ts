import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from "./service";
import { CookieServices } from '../../common/cookie';





@Component({
    selector:'leaveform',
    templateUrl:`app/leavepage/leaveform/leaveform.html`,
    providers:[Service,CookieServices]
})
export class leaveform{
   
public LeaveType:string;
public sdate:string;
public edate:string;
public Department:string;
public reason:string;
public selectedLink;
set( e: string): void   
{  
     this.selectedLink = e;        
 }  

  isSelected(name: string): boolean   
{  

//       if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
//           return false;  
// }  

      return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
 
    } 




constructor(private router: Router,
        private insertservice: Service,
        private cookieservice:CookieServices)
{



}
insert()
{
    if(this.edate==null){
            var userid=this.cookieservice.getCookie('user_id');
    this.insertservice.insertdata(this.LeaveType,this.sdate,this.Department, this.reason,userid)
    if(userid!=""){
        this.router.navigate(['maindashboard/employeedashboard']);
    }
    }else
    {
     var userid=this.cookieservice.getCookie('user_id');
    this.insertservice.insert1data(this.LeaveType,this.sdate,this.edate,this.Department, this.reason,userid)
    if(userid!=""){
        this.router.navigate(['maindashboard/employeedashboard']);
    }
     
}
    
}
home(){
     var userid=this.cookieservice.getCookie('user_id');
    if(userid!=""){
    this.router.navigate(['maindashboard/employeedashboard']);
    }
}

}






