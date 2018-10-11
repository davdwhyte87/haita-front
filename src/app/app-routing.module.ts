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
import { AuthGuard } from './auth.guard';
import { PostViewComponent } from './post-view/post-view.component';
import { PublicProfileComponent } from './public-profile/public-profile.component';

const routes:Routes=[
  {path:'',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'confirm',component:ConfirmComponent},
  {path:'forgotpass',component:ForgotpassComponent},
  {path:'fchangepass',component:FchangepassComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'post/:id/comments',component:CommentComponent},
  {path:'post',component:PostComponent,canActivate:[AuthGuard]},
  {path:'view_post/:id',component:PostViewComponent,canActivate:[AuthGuard]},
  {path:'profile/public/:uname',component:PublicProfileComponent,canActivate:[AuthGuard]}
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
