import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  loading:boolean
  error:boolean=false
  error_msg:string
  sign_in_errs
  success:boolean
  success_msg:string
  email:string


  forgotpass(){
    this.authService.forgotpass(this.email).subscribe((response)=>{
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
      }
    })
  }
}
