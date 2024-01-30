import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { FiltroComponent } from './filtro/filtro.component';
import { CardComponent } from './card/card.component';
import { LogoComponent } from './logo/logo.component';
import { TituloComponent } from './titulo/titulo.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { PaginacaoComponent } from './paginacao/paginacao.component';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { CustomPaginatorIntl } from './custom-paginator-intl/custom-paginator-intl.service';
import { DialogComponent } from './Dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogCrudComponent } from './dialog-crud/dialog-crud.component';
import { PesquisaLisaComponent } from './pesquisaLisa/pesquisa-lisa/pesquisa-lisa.component';


@NgModule({
  declarations: [
    BannerComponent,
    FiltroComponent,
    CardComponent,
    LogoComponent,
    TituloComponent,
    PaginacaoComponent,
    DialogComponent,
    DialogCrudComponent,
    PesquisaLisaComponent,
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
    FiltroComponent,
    CardComponent,
    LogoComponent,
    TituloComponent,
    PaginacaoComponent,
    DialogComponent,
    DialogCrudComponent
  ],
})
export class SharedModule { }
