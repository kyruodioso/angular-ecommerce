import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardProductsComponent } from './card-products/card-products.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { RouterModule } from '@angular/router';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CardProductsComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MdbCollapseModule,
    MdbRippleModule,
    MdbDropdownModule,
    MdbRippleModule,

  ],
  exports:[
    NavbarComponent,
    CardProductsComponent,
    FooterComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
