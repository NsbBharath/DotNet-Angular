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

    public postdat(mail:string,pwd:string): Promise<any>{
  return  this._http.post("http://localhost:56043/api/login/postdata", JSON.stringify({ "mail": mail,"password":pwd }), { headers: this.headers })
    .toPromise()
      .then(response => JSON.parse(response.json()))
      .catch(this.handleError);
    }
       private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
   
}
