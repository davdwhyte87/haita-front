import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../User';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService:UserService) { }
  user_img:string
  user_img_path:string
  ngOnInit() {
    this.getUser()
    this.user_img_path=environment.Api_Url+"image/user/"
  }
  file
  image_data
  onUploadChange(event){
    this.file = event.target.files[0];
    console.log(this.getImage())
    
  }

  getImage(){
  var reader=new FileReader()
  reader.readAsDataURL(this.file)
  reader.onloadend=()=>{
    this.image_data=reader.result
    return this.image_data
  }
  }
  name:string
  phone:number
  bio:string=""

  user=new User()

  page_loading:boolean
  loading:boolean
  error:boolean
  error_msg:string
  sign_up_errs
  success:boolean
  success_msg:string
  pg_done:boolean

  getUser(){
    this.page_loading=true
    this.userService.get().subscribe((response)=>{
      this.page_loading=false
      console.log(response)
      if(response['code']==1){
        this.pg_done=true
        this.user=response['data']
      }else{
        this.pg_done=false
      }
    })
  }

  update(){
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
    console.log(this.user.phone)
    var data={"name":this.user.name,
    "uname":this.user.uname,
    "phone":this.user.phone,
    "bio":this.user.bio,
    "image":this.image_data}
    this.userService.update(data).subscribe((response)=>{
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
        this.getUser()
      }
    })
  }
}
