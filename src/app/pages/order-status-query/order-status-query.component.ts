import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GraphqlService } from 'src/app/service/graphql.service';

@Component({
  selector: 'app-order-status-query',
  templateUrl: './order-status-query.component.html',
  styleUrls: ['./order-status-query.component.css']
})
export class OrderStatusQueryComponent implements OnInit {

  error: boolean = false;
  textError: String = null;
  formOrder: FormGroup;
  orders: any[] = [];

  constructor(public formBuilder: FormBuilder,
              private graphqlService: GraphqlService,
              private router: Router) {

    this.formOrder = this.formBuilder.group({
      order_code: ['', Validators.required],
      document_type: ['', Validators.required],
      document: ['', Validators.required]
    });
  }

   ngOnInit(): void {}


   submit(){

      if (!this.formOrder.valid) {
        
        this.error = true;
        this.textError = "Error, Todos los campos son requeridos!";
      } else {

        this.graphqlService
        .whereOrder(this.formOrder.value.document_type, this.formOrder.value.document, this.formOrder.value.order_code)
        .subscribe( (response: any) => {
          this.orders = response.data.order.data;
          if(this.orders.length > 0){
            
            localStorage.setItem('order', JSON.stringify(this.orders));
            this.router.navigate(['/detail']);
            this.error = false;
            this.textError = null
          } else {
            this.error = true;
            this.textError = "Error, no se encontraron resultados!";
          }
          
        });

      }

      
   }
}
