import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { BuscarComponent } from './buscar/buscar.component';
import { CardComponent } from './card/card.component';
import { LogoComponent } from './logo/logo.component';
import { TituloComponent } from './titulo/titulo.component';



@NgModule({
  declarations: [
    BannerComponent,
    BuscarComponent,
    CardComponent,
    LogoComponent,
    TituloComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BannerComponent,
    BuscarComponent,
    CardComponent,
    LogoComponent,
    TituloComponent
  ],
})
export class SharedModule { }
