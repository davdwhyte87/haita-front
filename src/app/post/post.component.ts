import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { environment } from '../../environments/environment';
import { Post } from '../Post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService:PostService) { }
  user_img:string
  user_img_path:string
  ngOnInit() {
    this.user_img_path=environment.Api_Url+"image/user/"
  }
  file
  image_data
  onUploadChange(event){
    this.file = event.target.files[0];
  }

  getImage(){
  var reader=new FileReader()
  reader.readAsDataURL(this.file)
  reader.onloadend=()=>{
    this.image_data=reader.result
    console.log(this.image_data)
    return this.image_data
  }
  }
  name:string
  phone:number
  bio:string=""

  post=new Post()
  page_loading:boolean
  loading:boolean
  error:boolean
  error_msg:string
  sign_up_errs
  success:boolean
  success_msg:string
  pg_done:boolean

 

  create(){
    if(this.file){
      var reader=new FileReader()
      reader.readAsBinaryString(this.file)
      reader.onloadend=()=>{
        this.image_data=btoa(reader.result.toString())
        this.curry()
        console.log(this.image_data)
      }
    }
    else{
      this.curry()
    }
  }

  //performs main upload of user data
  curry(){
    this.loading=true
    this.post.image=this.image_data
    console.log(this.post)
    this.postService.createPost(this.post).subscribe((response)=>{
      console.log(response)
      this.loading=false
      if(response['code']==0){
        this.error=true
        this.error_msg=response['message']
        this.sign_up_errs=response['errors']
      }
      if(response['code']==1){
        this.error=false
        this.success=true
        this.success_msg=response['message']
      }
    })
  }


}
