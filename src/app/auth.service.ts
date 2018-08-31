import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(user:User){
    return this.http.post(environment.Api_Url+'register',user)
  }

  login(user:User){
    return this.http.post(environment.Api_Url+'login',user)
  }

  confirm(code){
    return this.http.get(environment.Api_Url+'confirm/'+code)
  }

  forgotpass(email){
    var user=new User()
    user.email=email
    return this.http.post(environment.Api_Url+'forgotpass',user)
  }

  fchangepass(data){
    return this.http.post(environment.Api_Url+'forgotpass/changepass',data)
  }
  
}
