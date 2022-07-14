import { Injectable } from '@angular/core';
import { Product } from '../models/product.model'
import { BehaviorSubject } from 'rxjs' //patron observable

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private listCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();

  constructor() { }

  addProduct(product: Product) {
    this.listCart.push(product)
    this.myCart.next(this.listCart)
  }
  getListCart() {
    return this.listCart
  }
  getTotal() {
    return this.listCart.reduce((sum, item) => sum + item.price, 0)
  }
}
