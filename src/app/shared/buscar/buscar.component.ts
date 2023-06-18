import { Component, EventEmitter, Output } from '@angular/core';
import { Ordem } from '../enum/ordem';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent {
  @Output() termoPesquisa = new EventEmitter<string>();
  @Output() ordenarPor = new EventEmitter<Ordem>();
  @Output() tipoItemSelecionado = new EventEmitter<string | null>();

  pesquisa(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log('Emitindo evento com valor:', input.value);
    this.termoPesquisa.emit(input.value);
  }

  ordenar(event: any) {
    const valorOrdenacao = event.value as Ordem;
    console.log('Emitindo evento de ordenação com valor:', valorOrdenacao);
    this.ordenarPor.emit(valorOrdenacao);
  }

  selecionarTipoItem(event: any) {
    console.log('Emitindo evento de tipo de item selecionado com valor:', event.value);
    this.tipoItemSelecionado.emit(event.value);
  }

}





