import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CrudComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    SharedModule,
    MatButtonModule,
  ],
  exports: [
    CrudComponent
  ]
})
export class CrudModule { }
