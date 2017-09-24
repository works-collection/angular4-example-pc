import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @ViewChildren('choice', {read: ElementRef}) choice: QueryList<any>;
  processed: any= false;


  constructor() { }



}
