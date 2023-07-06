import { Component, Input } from '@angular/core';
import { Cart, CartItem } from 'src/app/interfaces/cart.interface';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private _cart:Cart ={items:[]};
  itemsQuantity =0

  @Input()
  get cart(): Cart{
    return this._cart;
  }

  set cart(cart: Cart){
    this._cart = cart;

    this.itemsQuantity = cart.items.map((item)=> item.quantity)
    .reduce((prev, current)=> prev + current , 0);
  }

  constructor(private cartService:CartService){}

  getTotal(items:Array<CartItem>):number{
   return this.cartService.getTotal(items);
  }

  onClearCart(){
    this.cartService.clearCart();
  }
}
