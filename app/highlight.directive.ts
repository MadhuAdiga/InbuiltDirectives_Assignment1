import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[my-span]' })

export class HighlightDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'gold';
    }
}
