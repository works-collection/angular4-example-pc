import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @ViewChildren('test', {read: ElementRef}) choice: QueryList<any>;
  processed: any= false;


  constructor() { }



}
