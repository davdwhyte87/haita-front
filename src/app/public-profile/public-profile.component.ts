import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../User';
import { Post } from '../Post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {

  constructor(
    private router:ActivatedRoute,
    private userService:UserService,
    private postService:PostService
    ) { }
  uname=this.router.snapshot.paramMap.get('uname')
  user:User
  posts:Post[]
  ngOnInit() {
   this.getUser()
  }

  getUser(){
    this.userService.findUser(this.uname).subscribe((response)=>{
      if(response['code']==1){
        this.user=response['data']
        this.getPosts(response['data'].id)
        console.log(this.user)
      }
    })
  }

  getPosts(id){
    this.postService.findPosts(id).subscribe((response)=>{
      if(response['code']==1){
        this.posts=response['data']
      }
    })
  }

}
