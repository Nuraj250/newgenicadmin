import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AddcategoryComponent} from './category/addcategory/addcategory.component';
import {CategoryViewComponent} from './category/category.component';
import {DeliveryComponent} from './delivery/delivery.component';
import {AdddeliveryComponent} from './delivery/adddelivery/adddelivery.component';
import {ProductComponent} from './product/product.component';
import {AddproductComponent} from './product/addproduct/addproduct.component';
import {UserComponent} from './user/user.component';
import {FinanceComponent} from './finance/finance.component';
import {OrderComponent} from './order/order.component';
import {AuthGuard} from './AuthGuard';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path: 'dashboard', component: DashboardComponent}, // ,canActivate:[AuthGuard],canActivateChild:[AuthGuard]
  {path: 'category', component: CategoryViewComponent},
  {path: 'addcategory', component: AddcategoryComponent},
  {path: 'delivery', component: DeliveryComponent},
  {path: 'adddelivery', component: AdddeliveryComponent},
  {path: 'order', component: OrderComponent},
  {path: 'product', component: ProductComponent},
  {path: 'addproduct', component: AddproductComponent},
  {path: 'user', component: UserComponent},
  {path: 'finance', component: FinanceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
