import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent {

  @Output() termoPesquisa = new EventEmitter<string>();

  onSearchChange(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log('Emitindo evento com valor:', input.value);
    this.termoPesquisa.emit(input.value);
  }

}



