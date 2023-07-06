import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.scss']
})
export class CardProductsComponent{
  @Input() product:Product | undefined;
  @Output() addToCart= new EventEmitter()

  constructor(private productsService:ProductsService, private readonly router:Router){}

  goToProduct(product:Product){
    this.router.navigate(['/product', product.id])
  }

  onAddToCart():void{
    this.addToCart.emit(this.product)
  }
}
