import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { FchangepassComponent } from './fchangepass/fchangepass.component';
import { ProfileComponent } from './profile/profile.component';
import { CommentComponent } from './comment/comment.component';
import { NavComponent } from './nav/nav.component';
import { PostComponent } from './post/post.component';
import { AuthGuard } from './auth.guard';
import { PostViewComponent } from './post-view/post-view.component';
import { AutherrorsComponent } from './autherrors/autherrors.component';
import { PublicProfileComponent } from './public-profile/public-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    ConfirmComponent,
    ForgotpassComponent,
    ChangepassComponent,
    FchangepassComponent,
    ProfileComponent,
    CommentComponent,
    NavComponent,
    PostComponent,
    PostViewComponent,
    AutherrorsComponent,
    PublicProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
