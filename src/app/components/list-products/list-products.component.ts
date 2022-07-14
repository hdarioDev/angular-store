import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model'
import { StoreService } from '../../services/store.service'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  total = 0
  listCart: Product[] = [];
  date = new Date()
  title = 'ENILno EROTS ym'
  products: Product[] = [
    {
      id: "asa",
      name: "Product 1",
      image: '../../../assets/default.png',
      price: 100
    },
    {
      id: "2",
      name: 'Muñeca de trapo',
      image: '../../../assets/default.png',
      price: 180,
    },
    {
      id: "3",
      name: 'Pelota de futbol',
      price: 120,
      image: '../../../assets/default.png',
    }
  ]

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.listCart = this.storeService.getListCart()
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
      .subscribe(data => {
        console.log("data", data);
        this.products = data;

      })
  }

  onAddToShoppingCart(product: Product) {
    console.log("list products ", product)
    this.storeService.addProduct(product)
    this.total = this.storeService.getTotal()
  }
}
