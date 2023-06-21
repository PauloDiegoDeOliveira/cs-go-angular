import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Ordem } from '../../core/enum/ordem';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit, OnDestroy {
  @Output() termoPesquisa = new EventEmitter<string>();
  @Output() ordenarPor = new EventEmitter<Ordem>();
  @Output() tipoItemSelecionado = new EventEmitter<string | null>();

  formulario: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      todosItens: [null],
      pesquisar: [''],
      ordenarPor: [null],
    });
  }

  ngOnInit() {
    // this.formulario.valueChanges.subscribe((valor: string) => {
    //   console.log('Emitindo evento de tipo de item selecionado com valor:', valor);
    //   this.tipoItemSelecionado.emit(valor);
    // });

    this.formulario.get('todosItens')!.valueChanges.subscribe((valor: string) => {
      console.log('Emitindo evento de tipo de item selecionado com valor:', valor);
      this.tipoItemSelecionado.emit(valor);
    });

    this.formulario.get('pesquisar')!.valueChanges.subscribe((valor: string) => {
      console.log('Emitindo evento com valor:', valor);
      this.termoPesquisa.emit(valor);
    });

    this.formulario.get('ordenarPor')!.valueChanges.subscribe((valor: Ordem) => {
      console.log('Emitindo evento de ordenação com valor:', valor);
      this.ordenarPor.emit(valor);
    });
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  limparInput() {
    this.formulario.patchValue({
      todosItens: null,
      pesquisar: '',
      ordenarPor: null,
    })
    console.log('Inputs limpo');
  }

}