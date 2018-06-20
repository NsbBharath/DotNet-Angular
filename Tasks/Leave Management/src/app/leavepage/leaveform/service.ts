import { Http, Headers, Response, Jsonp, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()

export class Service {
     public headers: Headers;

    constructor(private _http: Http) {
          this.headers = new Headers();  
    this.headers.append('Content-Type', 'application/json') 
    }

public insertdata( LeaveType:string,sdate:string,Department:string,reason:string,userid:string): Promise<any>{
  
  return  this._http.post("http://localhost:56043/api/login/insertdata", JSON.stringify({"userid":userid ,"LeaveType":LeaveType,"sdate":sdate,"edate":sdate,"Department":Department, "reason":reason }), { headers: this.headers })
    .toPromise()
      .then(response => JSON.parse(response.json()))
      .catch(this.handleError);
    
    }
    public insert1data( LeaveType:string,sdate:string,edate:string,Department:string,reason:string,userid:string): Promise<any>{
  
  return  this._http.post("http://localhost:56043/api/login/insertdata", JSON.stringify({"userid":userid ,"LeaveType":LeaveType,"sdate":sdate,"edate":edate,"Department":Department, "reason":reason }), { headers: this.headers })
    .toPromise()
      .then(response => JSON.parse(response.json()))
      .catch(this.handleError);
    
    }
       private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
   
}
