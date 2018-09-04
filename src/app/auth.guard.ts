import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router:Router,private authService:AuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      var token=localStorage.getItem('_token')
      if(!token){
        this.router.navigate(['/signin'])
      }
      this.authService.checksignin().subscribe(response=>{
        if(response['code']!=1){
          this.router.navigate(['/signin'])
        }
      })
      
    return true;
  }
}
