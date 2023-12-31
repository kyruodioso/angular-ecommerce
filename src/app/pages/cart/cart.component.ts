import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/interfaces/cart.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        id: 1,
        image: 'https://via.placeholder.com/150',
        title: 'shoes',
        price: 150,
        quantity: 1,
      },
      {
        id: 2,
        image: 'https://via.placeholder.com/150',
        title: 'shoes',
        price: 300,
        quantity: 3,
      },
      {
        id: 3,
        image: 'https://via.placeholder.com/150',
        title: 'shoes',
        price: 4500,
        quantity: 2,
      },
    ],
  };
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'image',
    'title',
    'price',
    'quantity',
    'total',
    'action',
  ];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart:Cart)=>{
      this.cart = _cart;
      this.dataSource = this.cart.items;
    })
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart():void{
    this.cartService.clearCart();
  }

  onRemoveFromCart(item:CartItem):void{
    this.cartService.removeFromCart(item)
  }

  onAddQuantity(item: CartItem):void{
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item: CartItem):void{
    this.cartService.removeQuantity(item);
  }
}
