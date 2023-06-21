import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/responses/card';
import { CardService } from 'src/app/services/card.service';
import { Ordem } from 'src/app/core/enum/ordem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards: Card[] = [];
  cardsMostrados: Card[] = [];
  cardsFiltrados: Card[] = [];
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
          this.cardsFiltrados = this.cards;
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
    let inicioDaPagina = this.pageIndex * this.pageSize;
    let fimDaPagina = (this.pageIndex + 1) * this.pageSize;
    this.cardsMostrados = this.cardsFiltrados.slice(inicioDaPagina, fimDaPagina);
    console.log('Atualizando cards mostrados');
  }

  pesquisarCards(termoPesquisa: string) {
    this.cardsFiltrados = this.cards.filter(card => card.name.toLowerCase().includes(termoPesquisa.toLowerCase()));
    this.pageIndex = 0;
    this.atualizarCardsMostrados();
    console.log('Evento de pesquisa recebido:', termoPesquisa);
  }

  ordenarCards(ordem: Ordem) {
    switch (ordem) {
      case Ordem.Padrao:
        const indiceInicial = this.pageIndex * this.pageSize;
        const indiceFinal = indiceInicial + this.pageSize;
        this.cardsMostrados = [...this.cards.slice(indiceInicial, indiceFinal)];
        break;

      case Ordem.Crescente:
        this.cardsMostrados = [...this.cardsMostrados.sort((a, b) => a.name.localeCompare(b.name))];
        break;

      case Ordem.Decrescente:
        this.cardsMostrados = [...this.cardsMostrados.sort((a, b) => b.name.localeCompare(a.name))];
        break;

      case Ordem.Stattrak:
        this.cardsFiltrados = [...this.cards.filter(a => a.stattrak)];
        this.pageIndex = 0;
        this.atualizarCardsMostrados();
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
      this.cardsFiltrados = this.cards;
    } else {
      this.cardsFiltrados = this.cards.filter(card => card.name.toLowerCase().includes(tipoItem.toLowerCase()));
    }

    this.pageIndex = 0;
    this.atualizarCardsMostrados();
    console.log('Evento de filtro por tipo de item recebido:', tipoItem);
  }

  mudancaPagina(event: { pageIndex: number, pageSize: number }) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.atualizarCardsMostrados();
    console.log('Evento de mudança de página recebido:', event);
  }

  // limparFiltros() {
  //   this.cardsFiltrados = this.cards;
  //   this.pageIndex = 0;
  //   this.atualizarCardsMostrados();
  //   console.log('Filtros limpos');

  //   //   const pesquisarInput = document.getElementById('pesquisarInput') as HTMLInputElement;
  //   //   if (pesquisarInput) {
  //   //     pesquisarInput.value = '';
  //   //     console.log('Limpo o valor do input pesquisar');
  //   //   }
  //   // }
  // }

}



