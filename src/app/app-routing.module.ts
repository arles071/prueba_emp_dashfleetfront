import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderStatusQueryComponent } from './pages/order-status-query/order-status-query.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { CompletedInquiryComponent } from './pages/completed-inquiry/completed-inquiry.component';

const routes: Routes = [
  {
    path: "",  component: OrderStatusQueryComponent
  },
  {
    path: "detail", component: OrderDetailComponent
  },
  {
    path: "completed-inquiry", component: CompletedInquiryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
