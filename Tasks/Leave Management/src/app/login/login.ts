import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from "./service";
import { CookieServices } from '../common/cookie';
import {Hero} from '../common/token';


@Component({
    selector:'login',
    templateUrl:`app/login/login.html`,
    providers:[Service,CookieServices]
})
export class login{
  
   private mail:string;
   private pwd:string;
   
    private logvalue = {
    mail:'',
    pwd:''
    }
   
    
    constructor(private router: Router,
        private postservice: Service,
        private cookieservice:CookieServices
    )
    {
        
 
     }
    postdata()
    {
      
      this.postservice.postdat(this.mail,this.pwd).then(this.fetchdata.bind(this));

    }
    
    fetchdata(objdata){
        if(objdata.userid !='' && objdata.roleid !=''){
           
            this.cookieservice.setCookie('user_id', objdata.userid, 1);
            this.cookieservice.setCookie('user_role', objdata.roleid, 1);
             var userrole=this.cookieservice.getCookie('user_role');
             
             if(userrole=='1'){
                  this.router.navigate(['maindashboard/employeedashboard']);
             }
                else if(userrole=='2'){
                     this.router.navigate(['maindashboard/managerdashboard']);
                }
       }
        
     else {
      alert('invalid user');
    }
    }

}
