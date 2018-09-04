import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../Post';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  constructor(private postService:PostService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.getPost()
  }

  loading:boolean
  post=new Post()
  pimage_path=environment.Api_Url+"image/post/"
  uimage_path=environment.Api_Url+"image/user/"
  getPost(){
    var id=this.route.snapshot.paramMap.get('id')
    this.postService.getPost(id).subscribe((response)=>{
      if(response['code']==0){
       
      }
      if(response['code']==1){
        this.post=response['data']
        console.log(response)
      }
    })
  }


  like(id){
    this.postService.likePost(id).subscribe((response)=>{
      this.getPost()
    })
  }

  my_id=localStorage.getItem('_user_id')
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


}
