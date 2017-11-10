import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {homeRouting} from './home-routing.module'
import {HomeComponent} from './home.component'

@NgModule({
  imports: [
    CommonModule,
    homeRouting
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
