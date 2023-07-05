import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Status } from 'src/app/core/enum/status';
import { Categoria } from 'src/app/models/responses/categoria';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
import { DialogCrudComponent } from 'src/app/shared/dialog-crud/dialog-crud.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  @ViewChild(MatTable)

  table!: MatTable<any>;
  exibirColunas: string[] = ['id_Categoria', 'nome_Categoria', 'descricao_Categoria', 'status_Categoria', 'actions'];
  categoria!: Categoria[];
  status = Status;

  constructor(
    public dialog: MatDialog,
    public categoriaElementService: CategoriaService) {
    this.categoriaElementService.getElements()
      .subscribe((categoria: Categoria[]) => {
        console.log('Categorias retornado da API: ', categoria);
        this.categoria = categoria;
      });
  }

  ngOnInit(): void {
  }

  openDialog(element: Categoria | null): void {
    const dialogRef = this.dialog.open(DialogCrudComponent, {
      width: '260px',
      data: element === null ? {
        nome_Categoria: '',
        descricao_Categoria: null,
        status_Categoria: ''
      } : {
        id_Categoria: element.id_Categoria,
        nome_Categoria: element.nome_Categoria,
        descricao_Categoria: element.descricao_Categoria,
        status_Categoria: element.status_Categoria
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log(result);
        if (this.categoria.map(p => p.id_Categoria).includes(result.id_Categoria)) {
          this.categoriaElementService.editElement(result)
            .subscribe((data: Categoria) => {
              const index = this.categoria.findIndex(p => p.id_Categoria === data.id_Categoria);
              this.categoria[index] = data;
              this.table.renderRows();
            });
        } else {
          this.categoriaElementService.createElements(result)
            .subscribe((data: Categoria) => {
              this.categoria.push(data);
              this.table.renderRows();
            });
        }
      }
    });
  }

  editElement(element: Categoria): void {
    this.openDialog(element);
    console.log('Editar categoria: ', element);
  }

  deleteElement(position: number): void {
    this.categoriaElementService.deleteElement(position)
      .subscribe(() => {
        this.categoria = this.categoria.filter(p => p.id_Categoria !== position);
      });
    console.log('Deletar categoria: ', position);
  }

}
