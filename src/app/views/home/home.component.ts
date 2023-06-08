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

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.getAllCards();
  }

  getAllCards() {
    this.cardService.getAll<Card>('skins.json').subscribe({
      next: (data: Card) => {
        if (Array.isArray(data)) {
          this.cards = data;
          this.filtroCards = data;
        }
        else {
          console.error('Não foi possível obter os dados.');
        }
      },
      error: (error) => console.error(error)
    });
  }

  pesquisa(pesquisa: string) {
    console.log('Evento recebido com valor:', pesquisa);
    if (!pesquisa) {
      this.filtroCards = this.cards;
    } else {
      this.filtroCards = this.cards.filter(card => card.name.toLowerCase().includes(pesquisa.toLowerCase()));
    }
  }

  ordenar(ordenar: string) {
    console.log('Evento de ordenação recebido com valor:', ordenar);
    switch (ordenar) {
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

}
