import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Bt4Module } from './bt4/bt4.module';
import { DatabindingModule } from './databinding/databinding.module';
import { StructuralDirectiveModule } from './structural-directive/structural-directive.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,Bt4Module, DatabindingModule, StructuralDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
