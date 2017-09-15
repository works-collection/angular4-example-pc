import { Directive, ElementRef, Input, OnChanges, QueryList, AfterViewInit, ChangeDetectorRef  } from '@angular/core';

@Directive({ selector: '[appTest]' })
export class TestDirective implements OnChanges {
  @Input('choice') choice: QueryList<any>;
  @Input('processed') processed: boolean;
  choices: Array<{direction: string, offsetTop: number , offsetLeft: number}> = [];
  constructor(el: ElementRef, private cdr: ChangeDetectorRef ) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
  ngOnChanges(changes) {
    // this.processed = changes.processed.currentValue;
    console.log(changes);
    this.cdr.detectChanges();
  }
  // ngAfterViewInit() {
  //   console.log(this.choice);
  // }
}
