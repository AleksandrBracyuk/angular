import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { S1Service } from './s1.service';

@NgModule({
  declarations: [
    AppComponent,
    A1Component,
    A2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [S1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
