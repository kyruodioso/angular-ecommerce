export interface Cart{
    items: Array<CartItem>
}

export interface CartItem {
    id:          number;
    image:       string;
    title:       string;
    price:       number;
    quantity:    number;
 
}

