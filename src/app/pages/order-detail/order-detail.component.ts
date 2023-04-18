import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  public orders: any;

  ngOnInit(){

    this.orders = localStorage.getItem('order');
    this.orders = JSON.parse(this.orders);
    
  }
}
