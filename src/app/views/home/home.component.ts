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
  isLoading: boolean = true;
  skeletonCards: number[] = new Array(1);

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.getAllCards();
  }

  getAllCards() {
    this.isLoading = true;
    this.cardService.getAll<Card>('skins.json').subscribe({
      next: (data: Card) => {
        if (Array.isArray(data)) {
          this.cards = data;
          this.filtroCards = this.cards.slice(0, this.exibirQuantidade);
        }
        else {
          console.error('Não foi possível obter os dados.');
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.isLoading = false;
      }
    });
  }

  pesquisa(pesquisa: string) {
    console.log('Evento recebido com valor:', pesquisa);
    this.pesquisaAtual = pesquisa;
    this.exibirQuantidade = 20;
    if (!pesquisa) {
      this.filtroCards = this.cards.slice(0, this.exibirQuantidade);
    } else {
      this.filtroCards = this.cards.filter(card => card.name.toLowerCase().includes(pesquisa.toLowerCase())).slice(0, this.exibirQuantidade);
    }
  }

  ordenar(ordenar: string) {
    console.log('Evento de ordenação recebido com valor:', ordenar);
    switch (ordenar) {
      case 'padrão':
        this.filtroCards = [...this.cards];
        break;
      case 'crescente':
        this.filtroCards = [...this.filtroCards.sort((a, b) => a.name.localeCompare(b.name))];
        break;
      case 'decrescente':
        this.filtroCards = [...this.filtroCards.sort((a, b) => b.name.localeCompare(a.name))];
        break;
      // TODO: Fazer caso para novos e antigos com base no criadoEm
      default:
        this.filtroCards = [...this.cards];
        break;
    }
  }

  mostrarMais() {
    this.exibirQuantidade += 20;
    if (this.pesquisaAtual) {
      this.filtroCards = this.cards.filter(card => card.name.toLowerCase().includes(this.pesquisaAtual.toLowerCase())).slice(0, this.exibirQuantidade);
    } else {
      this.filtroCards = this.cards.slice(0, this.exibirQuantidade);
    }
  }
}
