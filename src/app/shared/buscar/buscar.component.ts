import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent {

  @Output() termoPesquisa = new EventEmitter<string>();

}



