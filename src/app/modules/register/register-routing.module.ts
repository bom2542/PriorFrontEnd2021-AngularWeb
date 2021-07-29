import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterModule} from "./register.module";

const routes: Routes = [
  { path: "register", component: RegisterModule }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
