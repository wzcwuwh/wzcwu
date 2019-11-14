import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserSignupComponent} from './components/user/user-signup/user-signup.component';
import {UserVeriCodeComponent} from './components/user/user-signup/user-veri-code/user-veri-code.component';
import {UserForgetPwdComponent} from './components/user/user-forget-pwd/user-forget-pwd.component';
import {UserResetPwdComponent} from './components/user/user-reset-pwd/user-reset-pwd.component';
import {UserSignupPwdComponent} from './components/user/user-signup/user-signup-pwd/user-signup-pwd.component';
import {UserSigninComponent} from './components/user/user-signin/user-signin.component';
import {UserMenuComponent} from './components/user/user-menu/user-menu.component';
import {UserSearchResultComponent} from './components/user/user-search-result/user-search-result.component';
import {UserMentorInfoComponent} from './components/user/user-menu/user-mentor-info/user-mentor-info.component';
import {MentorSignupComponent} from './components/mentor/mentor-signup/mentor-signup.component';
import {MentorMenuComponent} from './components/mentor/mentor-menu/mentor-menu.component';
import {AdminMenuComponent} from './components/admin/admin-menu/admin-menu.component';

const routes: Routes = [
  {
    path: 'user/signup',
    component: UserSignupComponent
  },
  {
    path: 'user/veri/code',
    component: UserVeriCodeComponent
  },
  {
    path: 'user/forget/pwd',
    component: UserForgetPwdComponent
  },
  {
    path: 'user/reset/pwd',
    component: UserResetPwdComponent
  },
  {
    path: 'user/signup/pwd',
    component: UserSignupPwdComponent
  },
  {
    path: 'user/signin',
    component: UserSigninComponent
  },
  {
    path: 'user/menu',
    component: UserMenuComponent
  },
  {
    path: 'user/search/result',
    component: UserSearchResultComponent
  },
  {
    path: 'user/mentor/info',
    component: UserMentorInfoComponent
  },
  {
    path: 'mentor/signup',
    component: MentorSignupComponent
  },
  {
    path: 'mentor/menu',
    component: MentorMenuComponent
  },
  {
    path: 'admin/menu',
    component: AdminMenuComponent
  },
  {
    path: '**',
    redirectTo: 'user/signin'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
