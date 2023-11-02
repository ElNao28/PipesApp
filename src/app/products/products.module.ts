import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPagesComponent } from './pages/basics-pages/basics-pages.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UnCommonPageComponent } from './pages/un-common-page/un-common-page.component';
import { PrimerNgModule } from '../primer-ng/primer-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { TogglePipe } from './pipes/toggle-case.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    BasicsPagesComponent,
    NumbersPageComponent,
    UnCommonPageComponent,
    OrderComponent,
    //pipes
    TogglePipe,
    CanFlyPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimerNgModule
  ]
})
export class ProductsModule { }
