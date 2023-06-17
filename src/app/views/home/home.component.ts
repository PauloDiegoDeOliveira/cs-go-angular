import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/responses/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards: Card[] = [];
  filtroCards: Card[] = [];
  exibirQuantidade: number = 20;
  pesquisaAtual: string = '';
  pageIndex: number = 0;
  pageSize: number = 10;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.getAllCards();
    this.paginaCards();
  }

  getAllCards() {
    this.cardService.getAll<Card>('skins.json').subscribe({
      next: (data: Card) => {
        if (Array.isArray(data)) {
          this.cards = data;
          this.paginaCards();
        }
        else {
          console.error('Não foi possível obter os dados.');
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  paginaCards() {
    let startIndex = this.pageIndex * this.pageSize;
    let endIndex = startIndex + this.pageSize;
    if (this.pesquisaAtual) {
      this.filtroCards = this.filtroCards.slice(startIndex, endIndex);
    } else {
      this.filtroCards = this.cards.slice(startIndex, endIndex);
    }
  }

  paginaChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.paginaCards();
  }

  pesquisa(pesquisa: string) {
    console.log('Evento recebido com valor:', pesquisa);
    this.pesquisaAtual = pesquisa;
    this.exibirQuantidade = 20;
    if (!pesquisa) {
      this.filtroCards = this.cards.slice(0, this.exibirQuantidade);
    } else {
      this.filtroCards = this.cards.filter(card => card.name.toLowerCase().includes(pesquisa.toLowerCase()));
    }
    this.pageIndex = 0;
    this.paginaCards();
  }

  ordenar(ordenar: string) {
    console.log('Evento de ordenação recebido com valor:', ordenar);
    switch (ordenar) {
      case 'padrão':
        this.paginaCards();
        break;
      case 'crescente':
        this.filtroCards = [...this.filtroCards.sort((a, b) => a.name.localeCompare(b.name))];
        break;
      case 'decrescente':
        this.filtroCards = [...this.filtroCards.sort((a, b) => b.name.localeCompare(a.name))];
        break;
      // TODO: Adicionar caso para ordenar por "criadoEm"
      default:
        this.paginaCards();
        break;
    }
  }

  filtrarPorTipoItem(tipoItem: string) {
    console.log('Evento de tipo de item selecionado recebido com valor:', tipoItem);
    if (tipoItem === 'todos') {
      this.filtroCards = this.cards;
    } else {
      this.filtroCards = this.cards.filter(card => card.weapon.toLowerCase().includes(tipoItem.toLowerCase()));
      console.log('filtroCards agora é:', this.filtroCards);
    }
    this.pageIndex = 0;
    this.paginaCards();
  }

}
