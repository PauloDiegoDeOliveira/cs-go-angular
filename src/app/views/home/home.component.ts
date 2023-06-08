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
  filteredCards: Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.getAllCards();
  }

  getAllCards() {
    this.cardService.getAll<Card>('skins.json').subscribe({
      next: (data: Card) => {
        if (Array.isArray(data)) {
          this.cards = data;
          this.filteredCards = data;
        }
        else {
          console.error('Não foi possível obter os dados.');
        }
      },
      error: (error) => console.error(error)
    });
  }

  onSearchTermChange(searchTerm: string) {
    console.log('Evento recebido com valor:', searchTerm);
    if (!searchTerm) {
      this.filteredCards = this.cards;
    } else {
      this.filteredCards = this.cards.filter(card => card.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
  }

  onSortChange(sortOrder: string) {
    console.log('Evento de ordenação recebido com valor:', sortOrder);
    switch (sortOrder) {
      case 'crescente':
        this.filteredCards = [...this.filteredCards.sort((a, b) => a.name.localeCompare(b.name))];
        break;
      case 'decrescente':
        this.filteredCards = [...this.filteredCards.sort((a, b) => b.name.localeCompare(a.name))];
        break;
      // TODO: Fazer caso para novos e antigos com base no criadoEm
      default:
        this.filteredCards = [...this.cards];
        break;
    }
  }


}
