import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/responses/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {

  @Input() card: Card | undefined;
  showDetails: boolean = false;

}