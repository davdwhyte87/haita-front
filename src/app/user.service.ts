import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Auth': localStorage.getItem('_token'),
    'UID':localStorage.getItem('_user_id')
   });
  options = { headers: this.headers };
  update(data){
  
    let url=environment.Api_Url+"user/"+localStorage.getItem('_user_id')+"/update"
    console.log(url)
    return this.http.put(url,data,this.options)
  }

  get(){
    return this.http.get(environment.Api_Url+"user",this.options)
  }
}
