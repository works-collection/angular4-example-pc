import { NgModule, } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { GoodsService } from '../common.server';
import { TestDirective } from './test.directive';
import { TestPipe } from './test.pipe';
import { appRoutes } from './menu.route';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [
    MenuComponent,
    TestDirective,
    TestPipe],
  providers: [
    GoodsService
  ]
})
export class MenuModule { }
