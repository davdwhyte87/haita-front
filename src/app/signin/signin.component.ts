import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../User';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.loading=false
  }
  user=new User()
  loading:boolean
  error:boolean=false
  error_msg:string
  sign_up_errs
  success:boolean
  success_msg:string
  signin(){
    this.loading=true
    this.authService.register(this.user).subscribe((response)=>{
      this.loading=false
      console.log(response['code'])
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
