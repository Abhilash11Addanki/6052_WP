import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart = [];

  constructor(private service: ProductsService) {}

  ngOnInit() {
    this.cart = this.service.getCart();
  }

  del(i) {
     this.cart.splice(i, 1);
  }
}
