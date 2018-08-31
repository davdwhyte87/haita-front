import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../Post';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.getPosts()
    this.pimage_path=environment.Api_Url+"image/post/"
  }
  liked(id){
    //CHECK if a users id is part of the liked ids f a post
    var x=0
    id.forEach(element => {
      if(this.my_id== element['user_id']){
        x=1
      }
    });
    if(x==0){
      return true
    }
    else{
      return false
    }
  }
  pimage_path:string

  my_id=localStorage.getItem('_user_id')
  loading:boolean=true
  error:boolean=false
  error_msg:string
  sign_in_errs
  success:boolean
  success_msg:string
  posts:Post[]
  getPosts(){
    this.postService.getPosts().subscribe((response)=>{
      console.log(response)
      if(response['code']==0){
        this.error=true
        this.error_msg="An error occured"
      }
      if(response['code']==1){
        this.posts=response['data']
        this.loading=false
      }
    })
  }

  like(id){
    this.postService.likePost(id).subscribe((response)=>{
      console.log(response)
      if(response['code']==1){
        // this.getPosts()
      }
    })
  }

}
