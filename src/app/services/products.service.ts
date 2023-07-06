import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { environments } from 'src/environments/environments';
import { SingleProduct } from '../interfaces/singleProduct';

@Injectable({providedIn: 'root'})
export class ProductsService {

    private baseUrl:string =environments.baseUrl;

    constructor(private http: HttpClient) { }

    getProducts():Observable<Product[]>{
        return this.http.get<Product[]>(`${this.baseUrl}/products`);
     }

     getProductDetail(id:string){
        return this.http.get<SingleProduct>(`${this.baseUrl}/products/${id}`);
     }
    
}