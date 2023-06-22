import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-buscar',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit, OnDestroy {
  @Output() filtros = new EventEmitter<{ todosItens: string; pesquisar: string; ordenarPor: string; }>();

  formulario: FormGroup = new FormGroup({});
  private subscricaoFormulario?: Subscription;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      todosItens: [null],
      pesquisar: ['', Validators.required],
      ordenarPor: [null],
    });
  }

  ngOnInit() {
    this.subscricaoFormulario = this.formulario.valueChanges.subscribe((valor: { todosItens: string, pesquisar: string, ordenarPor: string }) => {
      console.log('Emitindo evento de tipo de item selecionado com valor:', valor);
      this.filtros.emit(valor);
    });
  }

  ngOnDestroy(): void {
    if (this.subscricaoFormulario) {
      this.subscricaoFormulario.unsubscribe();
    }
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