import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { BuscarComponent } from './buscar/buscar.component';
import { CardComponent } from './card/card.component';
import { LogoComponent } from './logo/logo.component';
import { TituloComponent } from './titulo/titulo.component';
import { FiltroComponent } from './filtro/filtro.component';



@NgModule({
  declarations: [
    BannerComponent,
    BuscarComponent,
    CardComponent,
    LogoComponent,
    TituloComponent,
    FiltroComponent
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
