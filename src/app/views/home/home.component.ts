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

constructor(private cardService: CardService) { }  

ngOnInit() {
  this.getAllCards();  
}

getAllCards() {
    this.cardService.getAll<Card>('/skins.json').subscribe((data: Card) => {
        if (Array.isArray(data)) {
          this.cards = data;
        } 
        else {
          console.error('Não foi possível obter os dados.');
        }
      },
      (error) => console.error(error)
    );
  }

}
