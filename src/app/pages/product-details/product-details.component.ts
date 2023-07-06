import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { SingleProduct } from 'src/app/interfaces/singleProduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  public product: SingleProduct= {} as SingleProduct;

  constructor(private cartService:CartService ,private productsService:ProductsService, private router: Router, private activatedroute:ActivatedRoute){}


  ngOnInit(): void {
    const {id}=this.activatedroute.snapshot.params;
    combineLatest([
      this.productsService.getProductDetail(id),
    ]).subscribe(([product])=>this.product= product
    )
}

onAddToCart(product: SingleProduct):void{
  this.cartService.addToCart({
    id:product.id,
    image:product.image,
    title:product.title,
    price:product.price,
    quantity:1,
   
  })
}
}
