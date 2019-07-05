import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bt4Component } from './bt4.component';
import { Bt4HeaderComponent } from './bt4-header/bt4-header.component';
import { Bt4CaruorelComponent } from './bt4-caruorel/bt4-caruorel.component';
import { Bt4BestmartphoneComponent } from './bt4-bestmartphone/bt4-bestmartphone.component';
import { BestsmartphoneitemComponent } from './bt4-bestmartphone/bestsmartphoneitem/bestsmartphoneitem.component';
import { Bt4LaptopComponent } from './bt4-laptop/bt4-laptop.component';
import { Bt4LaptopitemComponent } from './bt4-laptop/bt4-laptopitem/bt4-laptopitem.component';
import { Bt4FooterComponent } from './bt4-footer/bt4-footer.component';

@NgModule({
  declarations: [Bt4Component, Bt4HeaderComponent, Bt4CaruorelComponent, Bt4BestmartphoneComponent, BestsmartphoneitemComponent, Bt4LaptopComponent, Bt4LaptopitemComponent, Bt4FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [Bt4Component]
})
export class Bt4Module { }
