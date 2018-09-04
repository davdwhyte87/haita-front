import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }
  loading:boolean
  error:boolean=false
  error_msg:string
  sign_in_errs
  success:boolean
  success_msg:string
  token:string
  code:string

  confirm(){
    this.error=false
    if(!this.code){
      this.error=true
      this.error_msg="Your code is required."
      return 0
    }
    this.loading=true
    this.authService.confirm(this.code).subscribe((response)=>{
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
        this.router.navigate(['/signin'])
      }
    })
  }
}
