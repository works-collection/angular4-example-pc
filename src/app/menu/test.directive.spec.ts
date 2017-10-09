import { Directive, ElementRef, Input, OnChanges, DoCheck, QueryList, AfterViewInit, ChangeDetectorRef, Renderer2  } from '@angular/core';

import { TestDirective } from './test.directive';

describe('TestDirective', () => {
  it('should create an instance', () => {
    const directive = new TestDirective(ElementRef, ChangeDetectorRef, Renderer2);
    expect(directive).toBeTruthy();
  });
});
