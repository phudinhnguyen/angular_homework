import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabindingComponent } from '../databinding/databinding.component';
import { OnewayBindingComponent } from './oneway-binding/oneway-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { FormsModule } from "@angular/forms";
import { BaitapBindingComponent } from './baitap-binding/baitap-binding.component';

@NgModule({
  declarations: [DatabindingComponent, OnewayBindingComponent, TwowayBindingComponent, BaitapBindingComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    DatabindingComponent
  ]
})
export class DatabindingModule { }
