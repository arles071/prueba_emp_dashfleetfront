import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GraphQLModule } from './graphql.module';

import {  ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderStatusQueryComponent } from './pages/order-status-query/order-status-query.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CompletedInquiryComponent } from './pages/completed-inquiry/completed-inquiry.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderStatusQueryComponent,
    OrderDetailComponent,
    CompletedInquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
