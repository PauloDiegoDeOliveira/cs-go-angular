import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/responses/card';
import { DialogComponent } from '../Dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() card: Card | undefined;

  constructor(private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        card: this.card
      }
    });
  }

}

