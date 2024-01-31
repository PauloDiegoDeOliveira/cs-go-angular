import { Component,  Input } from '@angular/core';
import { DadosPesquisa } from 'src/app/models/Lisa/dados-pesquisa';

@Component({
  selector: 'app-resultado-pesquisa-lisa',
  templateUrl: './resultado-pesquisa-lisa.component.html',
  styleUrls: ['./resultado-pesquisa-lisa.component.scss']
})
export class ResultadoPesquisaLisaComponent {
  @Input() public software! : DadosPesquisa; 

}
