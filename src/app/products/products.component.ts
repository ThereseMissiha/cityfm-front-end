import { Component, OnInit } from '@angular/core';
import {Product} from '../shared/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products = [];
  }

}