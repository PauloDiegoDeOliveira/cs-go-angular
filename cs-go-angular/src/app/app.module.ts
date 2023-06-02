import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { BuscarComponent } from './shared/buscar/buscar.component';
import { BannerComponent } from './shared/banner/banner.component';
import { LogoComponent } from './shared/logo/logo.component';
import { TituloComponent } from './shared/titulo/titulo.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BuscarComponent,
    BannerComponent,
    LogoComponent,
    TituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
