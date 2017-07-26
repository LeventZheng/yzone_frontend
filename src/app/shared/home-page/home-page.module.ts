import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { RegisterComponent } from './register/register.component';
import { LoginInComponent } from './login-in/login-in.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SignBarComponent } from './sign-bar/sign-bar.component';

/**
 * 包含了首页中要用到的导航栏\页脚\登录页\注册也\锁屏页
 * 
 * @export
 * @class HomePageModule
 */
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
    ],
    exports: [
        BrowserModule,
        HttpModule,
        FooterComponent,
        NavbarComponent,
        LockScreenComponent,
        LoginInComponent,
        RegisterComponent
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        LockScreenComponent,
        LoginInComponent,
        RegisterComponent
,
    SignBarComponent
],
    providers: [],
})
export class HomePageModule { }
