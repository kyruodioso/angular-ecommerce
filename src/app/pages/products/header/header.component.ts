import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public products: Product[]=[];

  constructor(private productsService:ProductsService){}

  ngOnInit(): void {
      this.productsService.getProducts()
      .subscribe(products=>this.products=products)
  }
}
