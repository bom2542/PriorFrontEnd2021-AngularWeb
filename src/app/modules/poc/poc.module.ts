import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PocRoutingModule } from './poc-routing.module';
import { PocComponent } from './poc.component';
import { ImageMapComponent } from './image-map/image-map.component';


@NgModule({
  declarations: [
    PocComponent,
    ImageMapComponent
  ],
  imports: [
    CommonModule,
    PocRoutingModule
  ]
})
export class PocModule { }
