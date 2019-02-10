import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  nu;
  constructor(private service: ProductsService) {
    this.nu = this.service.getUser();
   }

  ngOnInit() {
    console.log(this.nu);
  }

}
