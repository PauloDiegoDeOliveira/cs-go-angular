import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.scss']
})
export class PaginacaoComponent {
  @Input() pageIndex: number | undefined;
  @Input() pageSize: number | undefined;
  @Output() pageChange = new EventEmitter();
  @Input() length: number | undefined;

}
