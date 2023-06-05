import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { BuscarComponent } from './buscar/buscar.component';
import { CardComponent } from './card/card.component';
import { LogoComponent } from './logo/logo.component';
import { TituloComponent } from './titulo/titulo.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [
    BannerComponent,
    BuscarComponent,
    CardComponent,
    LogoComponent,
    TituloComponent,

  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
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
