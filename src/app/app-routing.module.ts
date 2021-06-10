import { CustomerSaleComponent } from './example-project/customer-sale/customer-sale.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealerSaleComponent } from './example-project/dealer-sale/dealer-sale.component';

const routes: Routes = [
  {path:'customer-sale', component: CustomerSaleComponent},
  {path:'dealer-sale', component: DealerSaleComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
