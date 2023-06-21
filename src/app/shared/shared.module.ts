import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { BuscarComponent } from './buscar/buscar.component';
import { CardComponent } from './card/card.component';
import { LogoComponent } from './logo/logo.component';
import { TituloComponent } from './titulo/titulo.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MensagemComponent } from './mensagem/mensagem.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginacaoComponent } from './paginacao/paginacao.component';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { CustomPaginatorIntl } from './custom-paginator-intl/custom-paginator-intl.service';
import { DialogComponent } from './Dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BannerComponent,
    BuscarComponent,
    CardComponent,
    LogoComponent,
    TituloComponent,
    MensagemComponent,
    PaginacaoComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: CustomPaginatorIntl }
  ],
  exports: [
    BannerComponent,
    BuscarComponent,
    CardComponent,
    LogoComponent,
    TituloComponent,
    PaginacaoComponent,
    DialogComponent
  ],
})
export class SharedModule { }
