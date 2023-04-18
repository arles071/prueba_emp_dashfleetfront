import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import { Apollo } from 'apollo-angular';


@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(private apollo: Apollo) { }

  whereOrder(document_type: String, document: String, order_code: String){

    let queryOrder = gql`
      query {
          order(document_type: "${document_type}", document: "${document}", order_code: "${order_code}") {
              data {
                  id
                  order_code
                  address
                  status
                  document_type
                  delivery_date
                  document
                  name_customer
                  products {
                    id
                    name
                    reference
                    pivot {
                      cuantity
                    }
                  }
              }
          }      
      }
    `;

    return this.apollo
              .watchQuery({
                query: queryOrder,
              })
              .valueChanges;

  }
}
