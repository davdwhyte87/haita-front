import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.loading=false
  }
  user=new User()
  loading:boolean
  error:boolean
  error_msg:string
  sign_up_errs
  success:boolean
  success_msg:string
  signup(){
    this.loading=true
    this.authService.register(this.user).subscribe((response)=>{
      this.loading=false
      console.log(response['message'])
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

  reserr(){
    this.error=false
  }

}
