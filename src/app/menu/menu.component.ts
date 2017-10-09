import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { GoodsService } from '../common.server';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @ViewChildren('choice', {read: ElementRef}) choice: QueryList<any>;
  processed: any= false;


  constructor(
    private gooodSer: GoodsService
  ) {
    this.gooodSer.getGoodsList({searchText: 'lang=en'})
      .subscribe(res => {
        alert(res);
      });
  }



}
