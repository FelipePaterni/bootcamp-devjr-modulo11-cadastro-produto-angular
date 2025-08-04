import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  standalone: false,
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {

  @Input()
  categories: Category[] = [];

  @Input()
  product?: Product;

  @Output()
  saveEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  save() {
    this.saveEmitter.emit(true);
  }

  cancelar() {
    this.saveEmitter.emit(false);
  }

  selectedCategory(categoria1:Category, categoria2:Category):boolean{
   return categoria1 && categoria2 ? categoria1.id === categoria2.id : false;

  } 

}
