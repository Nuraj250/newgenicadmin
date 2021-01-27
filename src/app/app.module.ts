import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { CategoryComponent } from './category/category.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { UserComponent } from './user/user.component';
import { FinanceComponent } from './finance/finance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddcategoryComponent } from './category/addcategory/addcategory.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { AdddeliveryComponent } from './delivery/adddelivery/adddelivery.component';

// @ts-ignore
// import { CountdownTimerModule } from 'ngx-countdown-timer-date';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OrderComponent,
    CategoryComponent,
    DeliveryComponent,
    UserComponent,
    FinanceComponent,
    DashboardComponent,
    AddcategoryComponent,
    AddproductComponent,
    AdddeliveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // CountdownTimerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
