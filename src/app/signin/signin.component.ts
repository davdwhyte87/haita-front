import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }
  
  ngOnInit() {
    this.loading=false
  }
  user=new User()
  loading:boolean
  error:boolean=false
  error_msg:string
  sign_in_errs
  success:boolean
  success_msg:string
  token:string

  
  signin(){
    this.loading=true
    this.authService.login(this.user).subscribe((response)=>{
      this.loading=false
      console.log(response['message'])
      if(response['code']==0){
        this.error=true
        this.error_msg=response['message']
        this.sign_in_errs=response['errors']
      }
      if(response['code']==1){
        this.error=false
        this.success=true
        this.success_msg=response['message']
        this.token=response['token']
        localStorage.setItem('_token',this.token)
        localStorage.setItem('_user_id',response['user_id'])
        this.router.navigate(['/home'])
      }
    })
  }

}
