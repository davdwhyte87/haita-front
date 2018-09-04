import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
    this.authService.checksignin().subscribe(response=>{
      if(response['code']==1){
        this.auth_state=true
      }
      else{
        this.auth_state=false
      }
    })
  }
  auth_state:boolean
  loading:boolean
  logout(){
    this.loading=true
    localStorage.removeItem("_token")
    localStorage.removeItem("_user_id")
    this.router.navigate(['/signin'])
  }

}
