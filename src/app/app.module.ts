import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaleComponent } from './example-project/sale/sale.component';
import { FormsModule } from '@angular/forms';
import { CustomerSaleComponent } from './example-project/customer-sale/customer-sale.component';
import { DealerSaleComponent } from './example-project/dealer-sale/dealer-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    SaleComponent,
    CustomerSaleComponent,
    DealerSaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
