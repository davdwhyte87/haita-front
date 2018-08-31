import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { FchangepassComponent } from './fchangepass/fchangepass.component';
import { ProfileComponent } from './profile/profile.component';
import { CommentComponent } from './comment/comment.component';
import { PostComponent } from './post/post.component';

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'confirm',component:ConfirmComponent},
  {path:'forgotpass',component:ForgotpassComponent},
  {path:'fchangepass',component:FchangepassComponent},
  {path:'profile',component:ProfileComponent},
  {path:'post/:id/comments',component:CommentComponent},
  {path:'post',component:PostComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
