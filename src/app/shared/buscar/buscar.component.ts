import { Component, EventEmitter, Output } from '@angular/core';
import { Ordem } from '../../core/enum/ordem';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent {
  @Output() termoPesquisa = new EventEmitter<string>();
  @Output() ordenarPor = new EventEmitter<Ordem>();
  @Output() tipoItemSelecionado = new EventEmitter<string | null>();
  @Output() limparFiltros = new EventEmitter<void>();

  formulario: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      todosItens: null,
      pesquisar: [''],
      ordenarPor: null,
    });
  }

  pesquisarCards(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log('Emitindo evento com valor:', input.value);
    this.termoPesquisa.emit(input.value);
  }

  ordenarCards(event: any) {
    const valorOrdenacao = event.value as Ordem;
    console.log('Emitindo evento de ordenação com valor:', valorOrdenacao);
    this.ordenarPor.emit(valorOrdenacao);
  }

  filtrarPorTipoItem(event: any) {
    console.log('Emitindo evento de tipo de item selecionado com valor:', event.value);
    this.tipoItemSelecionado.emit(event.value);
  }

  limparInput() {
    this.formulario.patchValue({
      todosItens: null,
      pesquisar: '',
      ordenarPor: null,
    })
  }
}






