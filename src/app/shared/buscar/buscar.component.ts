import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent {

  @Output() termoPesquisa = new EventEmitter<string>();
  @Output() ordenarPor = new EventEmitter<string>();

  pesquisa(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log('Emitindo evento com valor:', input.value);
    this.termoPesquisa.emit(input.value);
  }

  ordenar(event: any) {
    console.log('Emitindo evento de ordenação com valor:', event.value);
    this.ordenarPor.emit(event.value);
  }

  limparInput(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = '';
  }

}





