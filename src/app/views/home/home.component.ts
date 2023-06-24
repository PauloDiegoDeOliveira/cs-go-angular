import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/responses/card';
import { CardService } from 'src/app/services/card/card.service';
import { Ordem } from 'src/app/core/enum/ordem';
import { Item } from 'src/app/core/enum/item';
import { Filtros } from 'src/app/models/filtros';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';

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

  constructor(private cardService: CardService) {
    this.obterTodosCards();
  }

  ngOnInit() {
  }

  obterTodosCards() {
    this.cardService.obterTodosCards<Card>('skins.json')
      .pipe(takeUntilDestroyed(),
        debounceTime(500))
      .subscribe({
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
    console.log('Atualizando cards mostrados', this.cardsMostrados);
  }

  filtros(filtros: Filtros) {
    switch (filtros.todosItens) {
      case Item.Todos:
        this.cardsFiltrados = this.cards;
        break;

      case Item.Faca:
        this.cardsFiltrados = this.cards.filter(card => card.name.toLowerCase().includes(Item.Faca.toLowerCase()));
        break;

      case Item.Luva:
        this.cardsFiltrados = this.cards.filter(card => card.name.toLowerCase().includes(Item.Luva.toLowerCase()));
        break;

      default:
        this.cardsFiltrados = this.cards;
        break;
    }

    if (filtros.pesquisar) {
      this.cardsFiltrados = this.cardsFiltrados.filter(card => card.name.toLowerCase().includes(filtros.pesquisar.toLowerCase()));
      console.log('Evento de filtro por tipo de item recebido:', filtros);
    }

    switch (filtros.ordenarPor) {
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
        this.cardsFiltrados = [...this.cardsFiltrados.filter(a => a.stattrak)];
        this.pageIndex = 0;
        this.atualizarCardsMostrados();
        break;

      default:
        this.atualizarCardsMostrados();
        break;
    }
    console.log('Evento de filtro por tipo de item recebido:', filtros);
    console.log('Retorno da API', this.cards);
  }

  mudancaPagina(event: { pageIndex: number, pageSize: number }) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.atualizarCardsMostrados();
    console.log('Evento de mudança de página recebido:', event);
  }

}



