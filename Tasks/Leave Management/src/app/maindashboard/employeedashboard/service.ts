import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

transform(data: any, searchText: any): any {
// check if search term is undefined
if ( searchText === undefined) return data;
//return updated userdata arrays
return data.filter(function(datas){
return datas.Status.toLowerCase().includes(searchText.toLowerCase());
})
}
}


@Injectable()
export class employeedashboardservices {
    
  public headers: Headers;
     constructor(private http: Http) {
    this.headers = new Headers();  
    this.headers.append('Content-Type', 'application/json') 
  }

getdata(userid:string,roleid:string):Promise<any>
{
  
 
    // alert(roleid);
  return  this.http.post("http://localhost:56043/api/login/getdata", JSON.stringify({ "userid": userid,"roleid":roleid }), { headers: this.headers })
    .toPromise().then(response=>JSON.parse(response.json())).catch(this.handleError)
}
private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }


}