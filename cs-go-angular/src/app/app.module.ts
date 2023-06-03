import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { BuscarComponent } from './shared/buscar/buscar.component';
import { BannerComponent } from './shared/banner/banner.component';
import { LogoComponent } from './shared/logo/logo.component';
import { TituloComponent } from './shared/titulo/titulo.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './views/home/home.component';
import { CardComponent } from './shared/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BuscarComponent,
    BannerComponent,
    LogoComponent,
    TituloComponent,
    HomeComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
