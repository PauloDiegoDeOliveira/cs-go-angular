import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/responses/card';
import { CardService } from 'src/app/services/card.service';
import { Ordem } from 'src/app/shared/enum/ordem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards: Card[] = [];
  cardsMostrados: Card[] = [];
  pageIndex: number = 0;
  pageSize: number = 10;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.obterTodosCards();
  }

  obterTodosCards() {
    this.cardService.obterTodosCards<Card>('skins.json').subscribe({
      next: (data: Card) => {
        if (Array.isArray(data)) {
          this.cards = data;
          this.atualizarCardsMostrados();
        }
        else {
          console.error('Não foi possível obter os dados.');
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
    console.log('Buscando todos os cards');
  }

  atualizarCardsMostrados() {
    this.cardsMostrados = this.cards.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
    console.log('Atualizando cards mostrados');
  }

  mudancaPagina(event: { pageIndex: number, pageSize: number }) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.atualizarCardsMostrados();
    console.log('Evento de mudança de página recebido:', event);
  }

  pesquisarCards(termoPesquisa: string) {
    this.cards = this.cards.filter(card => card.name.toLowerCase().includes(termoPesquisa.toLowerCase()));
    this.pageIndex = 0;
    this.atualizarCardsMostrados();
    console.log('Evento de pesquisa recebido:', termoPesquisa);
  }

  ordenarCards(ordem: Ordem) {
    switch (ordem) {
      case Ordem.Crescente:
        this.cardsMostrados = [...this.cardsMostrados.sort((a, b) => a.name.localeCompare(b.name))];
        break;

      case Ordem.Decrescente:
        this.cardsMostrados = [...this.cardsMostrados.sort((a, b) => b.name.localeCompare(a.name))];
        break;

      case Ordem.Padrao:
        const indiceInicial = this.pageIndex * this.pageSize;
        const indiceFinal = indiceInicial + this.pageSize;
        this.cardsMostrados = [...this.cards.slice(indiceInicial, indiceFinal)];
        break;

      default:
        this.atualizarCardsMostrados();
        break;
    }
    console.log('Evento de ordenação recebido:', ordem);
  }

  filtrarPorTipoItem(tipoItem: string | null) {
    if (!tipoItem)
      return;

    if (tipoItem === 'todos') {
      this.cards = this.cards;
    } else {
      this.cards = this.cards.filter(card => card.name.toLowerCase().includes(tipoItem.toLowerCase()));
    }
    this.pageIndex = 0;
    this.atualizarCardsMostrados();
    console.log('Evento de filtro por tipo de item recebido:', tipoItem);
  }

}
