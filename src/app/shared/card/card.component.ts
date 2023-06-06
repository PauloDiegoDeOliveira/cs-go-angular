import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Card } from 'src/app/models/responses/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  items: Card[] = [];  

  constructor(private cardService: CardService) { }  

  ngOnInit() {
    this.getAllCards();  
  }

getAllCards() {
    this.cardService.getAll<Card>('/skins.json').subscribe((data: Card) => {
        if (Array.isArray(data)) {
          this.items = data;
        } else {
          console.error('Não foi possível obter os dados.');
        }
      },
      (error) => console.error(error)
    );
  }
}