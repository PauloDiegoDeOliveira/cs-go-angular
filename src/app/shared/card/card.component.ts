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
  carregandoSkeleton: boolean = true;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    setTimeout(() => {
      this.carregandoSkeleton = false;
    }, 2000);
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        card: this.card
      }
    });
  }

}

