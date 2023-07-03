import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Categoria } from 'src/app/models/responses/categoria';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-crud',
  templateUrl: './dialog-crud.component.html',
  styleUrls: ['./dialog-crud.component.scss']
})
export class DialogCrudComponent implements OnInit {
  element!: Categoria;
  isChange!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    
    public data: Categoria,
    public dialogRef: MatDialogRef<DialogCrudComponent>,
  ) { }

  ngOnInit(): void {
    if (this.data.id_Categoria != null) {
      this.isChange = true;
    } else {
      this.isChange = false;
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
