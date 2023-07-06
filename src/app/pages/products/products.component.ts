import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy{
  products: Array<Product> | undefined;
  productsSubscription: Subscription | undefined;

  constructor(private cartService:CartService, private productsService: ProductsService){}

  ngOnInit(){
    this.getProducts();
  }

  getProducts():void{
    this.productsSubscription= this.productsService.getProducts()
    .subscribe((_products)=>{
      this.products= _products;
    })
  }

onAddToCart(product: Product):void{
  this.cartService.addToCart({
    id:product.id,
    image:product.image,
    title:product.title,
    price:product.price,
    quantity:1,
   
  })
}

ngOnDestroy(): void {
    if(this.productsSubscription){
      this.productsSubscription.unsubscribe();
    }
}
}
