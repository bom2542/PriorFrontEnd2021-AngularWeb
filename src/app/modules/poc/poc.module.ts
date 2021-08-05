import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PocRoutingModule } from './poc-routing.module';
import { PocComponent } from './poc.component';
import { ImageMapComponent } from './image-map/image-map.component';
import {TooltipModule} from "primeng/tooltip";
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    PocComponent,
    ImageMapComponent
  ],
    imports: [
        CommonModule,
        PocRoutingModule,
        TooltipModule,
        DialogModule,
        ButtonModule,
        InputTextModule
    ]
})
export class PocModule { }
