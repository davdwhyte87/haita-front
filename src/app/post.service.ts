import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getPosts(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Auth': localStorage.getItem('_token') });
    let options = { headers: headers };
    return this.http.get(environment.Api_Url+'posts',options)
  }

  likePost(id){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Auth': localStorage.getItem('_token'),
      'UID':localStorage.getItem('_user_id')
     });
    let options = { headers: headers };
    return this.http.get(environment.Api_Url+'post/'+id+"/like",options)
  }
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Auth': localStorage.getItem('_token'),
    'UID':localStorage.getItem('_user_id')
   });
  options = { headers: this.headers };
  getComments(id){
    return this.http.get(environment.Api_Url+'post/'+id+"/comments",this.options)
  }

  postComment(id,comment){
    return this.http.post(environment.Api_Url+'post/'+id+"/comment",comment,this.options)
  }

  createPost(post){
    return this.http.post(environment.Api_Url+'post',post,this.options)
  }

  getMyPosts(){
    return this.http.get(environment.Api_Url+"my_posts",this.options)
  }

  getPost(id){
    return this.http.get(environment.Api_Url+"post/"+id,this.options)
  }

  findPosts(id){
    return this.http.get(environment.Api_Url+"find_posts/"+id,this.options)
  }
}
