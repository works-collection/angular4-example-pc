import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './src/app/auth/login/login.component';
import { RegisterComponent } from './src/app/auth/register/register.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
