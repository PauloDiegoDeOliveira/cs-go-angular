import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Filtros } from 'src/app/models/filtros';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-buscar',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {
  @Output() filtros = new EventEmitter<Filtros>();

  formulario: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    this.formularioInicial();
  }

  ngOnInit() {
  }

  formularioInicial() {
    this.formulario = this.formBuilder.group({
      todosItens: [null],
      pesquisar: ['', Validators.required],
      ordenarPor: [null],
    });

    this.formulario.valueChanges
      .pipe(takeUntilDestroyed(),
        debounceTime(500))
      .subscribe((filtros: Filtros) => {
        console.log('Emitindo evento de tipo de item selecionado com valor:', filtros);
        this.filtros.emit(filtros);
      });
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