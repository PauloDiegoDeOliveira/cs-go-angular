import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Filtros } from 'src/app/models/filtros';

@Component({
  selector: 'app-buscar',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit, OnDestroy {
  @Output() filtros = new EventEmitter<Filtros>();

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
    this.subscricaoFormulario = this.formulario.valueChanges.subscribe((filtros: Filtros) => {
      console.log('Emitindo evento de tipo de item selecionado com valor:', filtros);
      this.filtros.emit(filtros);
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