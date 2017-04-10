import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { highlightComponent }  from './highlight.component';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, highlightComponent, HighlightDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
