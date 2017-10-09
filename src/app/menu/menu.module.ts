import { NgModule, } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';

import { TestDirective } from './test.directive';
import { TestPipe } from './test.pipe';
import { appRoutes } from './menu.route';
import { Test2Directive } from './test2.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [
    MenuComponent,
    TestDirective,
    TestPipe,
    Test2Directive]
})
export class MenuModule { }
