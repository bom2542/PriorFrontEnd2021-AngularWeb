import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import { MenuComponent } from './modules/menu/menu.component';
import {HttpClientModule} from "@angular/common/http";
import {TooltipModule} from 'primeng/tooltip';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    TooltipModule,
    DialogModule
  ],
  providers: [],
  exports: [
    MenuComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
