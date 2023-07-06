import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';

//mdbootstrapModules//
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from "../components/components.module";
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './products/header/header.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';


@NgModule({
    declarations: [
        CartComponent,
        LoginComponent,
        RegisterComponent,
        ProductDetailsComponent,
        ProductsComponent,
        HomeComponent,
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        MdbFormsModule,
        MdbCarouselModule,
        RouterModule,
        ComponentsModule,
        MdbRippleModule,
        CarouselModule,
        MdbValidationModule,
        MdbModalModule
    ]
})
export class PagesModule { }
