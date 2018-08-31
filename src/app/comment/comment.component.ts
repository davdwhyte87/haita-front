import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Comment } from '../Comment';
import { environment } from '../../environments/environment';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private postService:PostService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.getComments()
    this.pimage_path=environment.Api_Url+"image/user/"
  }
  pimage_path:string
  comment=new Comment()
  comments:Comment[]
  loading:boolean
  getComments(){
    var id=this.route.snapshot.paramMap.get('id')
    this.postService.getComments(id).subscribe(response=>{
      console.log(response)
      if(response['code']==1){
        this.comments=response['data']
      }
      else{

      }
    })
  }

  postComment(){
    this.loading=true
    var id=this.route.snapshot.paramMap.get('id')
    this.postService.postComment(id,this.comment).subscribe(response=>{
      this.loading=false
      console.log(response)
      if(response['code']==1){
        this.comment.text=""
        this.getComments()
      }
    })
  }

}
