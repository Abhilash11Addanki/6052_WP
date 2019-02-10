import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { findComponentView } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-searchproducts',
  templateUrl: './searchproducts.component.html',
  styleUrls: ['./searchproducts.component.css']
})
export class SearchproductsComponent implements OnInit {

  check = true;
  searchdata;
  laptop;
  cart = [];
  ncart: any;
  acart = [];
  nid = [];
  see = false;
  newid;
  nhome;
  id;
  infodata;

  constructor(private service: ProductsService, private route: ActivatedRoute) { 
    
    this.route.params.subscribe(data => {this.searchdata = this.route.snapshot.paramMap.get("search");}

    
    )
  
  }

  ngOnInit() {
    //this.find();
    this.searchdata = this.route.snapshot.paramMap.get("search");
    
    this.cart = this.service.getProducts();

    var det = this.service.dataDB();

    det.subscribe((temp) =>{this.ncart = temp;
      console.log(this.ncart);
    }, ()=>{
    });

    //this.infodata =this.nhome;

  }


  gif(gid) {
    this.service.setid(gid);
  }

  addc(proid) {
    this.service.addToCart(proid);
  }

  //this.ncart = this.service.dataDB()
}
