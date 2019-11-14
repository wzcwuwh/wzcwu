import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSignupComponent } from './components/user/user-signup/user-signup.component';
import { UserSigninComponent } from './components/user/user-signin/user-signin.component';
import { UserMenuComponent } from './components/user/user-menu/user-menu.component';
import { UserSearchResultComponent } from './components/user/user-search-result/user-search-result.component';
import { UserMenuNavComponent } from './components/user/user-menu/user-menu-nav/user-menu-nav.component';
import { UserMenuListComponent } from './components/user/user-menu/user-menu-list/user-menu-list.component';
import { UserMentorInfoComponent } from './components/user/user-menu/user-mentor-info/user-mentor-info.component';
import { MentorSignupComponent } from './components/mentor/mentor-signup/mentor-signup.component';
import { MentorMenuComponent } from './components/mentor/mentor-menu/mentor-menu.component';
import { AdminMenuComponent } from './components/admin/admin-menu/admin-menu.component';
import { AdminMenuNavComponent } from './components/admin/admin-menu/admin-menu-nav/admin-menu-nav.component';
import { AdminMenuTechComponent } from './components/admin/admin-menu/admin-menu-tech/admin-menu-tech.component';
import { AdminMenuBlockComponent } from './components/admin/admin-menu/admin-menu-block/admin-menu-block.component';
import { AdminMenuPaymentComponent } from './components/admin/admin-menu/admin-menu-payment/admin-menu-payment.component';
import { UserVeriCodeComponent } from './components/user/user-signup/user-veri-code/user-veri-code.component';
import { UserSignupPwdComponent } from './components/user/user-signup/user-signup-pwd/user-signup-pwd.component';
import { UserForgetPwdComponent } from './components/user/user-forget-pwd/user-forget-pwd.component';
import {EncryptService} from './services/encrypt.service'
import {EmailValidationService} from './services/email-validation.service';
import { UserResetPwdComponent } from './components/user/user-reset-pwd/user-reset-pwd.component'

@NgModule({
  declarations: [
    AppComponent,
    UserSignupComponent,
    UserSigninComponent,
    UserMenuComponent,
    UserSearchResultComponent,
    UserMenuNavComponent,
    UserMenuListComponent,
    UserMentorInfoComponent,
    MentorSignupComponent,
    MentorMenuComponent,
    AdminMenuComponent,
    AdminMenuNavComponent,
    AdminMenuTechComponent,
    AdminMenuBlockComponent,
    AdminMenuPaymentComponent,
    UserVeriCodeComponent,
    UserSignupPwdComponent,
    UserForgetPwdComponent,
    UserResetPwdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EncryptService, EmailValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
