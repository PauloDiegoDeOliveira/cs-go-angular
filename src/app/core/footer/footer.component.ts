import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  private _year: number = new Date().getFullYear();

  public get year(): number {
    return this._year;
  }

}
