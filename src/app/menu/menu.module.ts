import { NgModule, } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';

import { TestDirective } from './test.directive';
import { appRoutes } from './menu.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [
    MenuComponent,
    TestDirective]
})
export class MenuModule { }
