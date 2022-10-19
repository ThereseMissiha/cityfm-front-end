import { Component, OnInit } from '@angular/core';
import {Product} from '../shared/models/product';
import {ProductService} from '../shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe((products) =>{
      this.products = products;
    });
  }
  
}
