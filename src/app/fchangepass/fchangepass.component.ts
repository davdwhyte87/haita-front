import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-fchangepass',
  templateUrl: './fchangepass.component.html',
  styleUrls: ['./fchangepass.component.css']
})
export class FchangepassComponent implements OnInit {

  constructor(private authService:AuthService) { }
  ngOnInit() {
  }
  loading:boolean
  error:boolean=false
  error_msg:string
  sign_in_errs
  success:boolean=false
  success_msg:string

  newpass:string
  confirmpass:string
  code:number


  change_pass(){
    console.log("kkk`")
    if(this.newpass==this.confirmpass){
      var data={'password':this.newpass,'code':this.code}
      this.authService.fchangepass(data).subscribe((response)=>{
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
    else{
      this.error=true
      this.error_msg="Passwords do not match"

      return 0
    }
  }
}
