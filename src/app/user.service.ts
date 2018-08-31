import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  update(data){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Auth': localStorage.getItem('_token') });
    let options = { headers: headers };
    let url=environment.Api_Url+"user/"+localStorage.getItem('_user_id')+"/update"
    console.log(url)
    return this.http.put(url,data,options)
  }

  get(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':  'http://127.0.0.1:5000',
      'Auth': localStorage.getItem('_token') });
    let options = { headers: headers };
    return this.http.get(environment.Api_Url+"user",options)
  }
}
