import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Ordem } from '../../core/enum/ordem';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buscar',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class BuscarComponent implements OnInit, OnDestroy {
  @Output() termoPesquisa = new EventEmitter<string>();
  @Output() ordenarPor = new EventEmitter<Ordem>();
  @Output() filtros = new EventEmitter<{ todosItens: string; pesquisar: string; ordenarPor: string; }>();

  formulario: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      todosItens: [null],
      pesquisar: [''],
      ordenarPor: [null],
    });
  }

  ngOnInit() {
    this.formulario.valueChanges.subscribe((valor: { todosItens: string, pesquisar: string, ordenarPor: string }) => {
      console.log('Emitindo evento de tipo de item selecionado com valor:', valor);
      this.filtros.emit(valor);
    });
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  limparInput() {
    this.formulario.patchValue({
      todosItens: null,
      pesquisar: '',
      ordenarPor: null,
    })
    console.log('Inputs limpo');
  }

}