import { Component } from '@angular/core'
import { Directive, ElementRef, Input } from '@angular/core';


@Component ({
    selector: `my-span`,
    templateUrl:`./app/app.component.html`
})


export class highlightComponent{
  color: string;
}