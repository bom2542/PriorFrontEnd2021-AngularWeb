import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import {SharedModule} from "../../shared/shared.module";
import { TableComponent } from './component/table/table.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    RegisterComponent,
    TableComponent
  ],
    imports: [
        CommonModule,
        RegisterRoutingModule,
        SharedModule,
        ReactiveFormsModule,
    ]
})
export class RegisterModule { }
