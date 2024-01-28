import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Filtros } from 'src/app/models/filtros';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, filter, switchMap } from 'rxjs';
import { PesquisarLisaService } from 'src/app/services/pesquisarLisa/pesquisar-lisa.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {
  @Output() filtros = new EventEmitter<Filtros>();

  formulario: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private pesquisarLisaService: PesquisarLisaService) {
    this.formularioInicial();
  }

  ngOnInit() {
    this.teste();
    this.iniciarBuscaNoLisa();
  }

  teste() {
    console.log('--- Teste ---');
  }

  iniciarBuscaNoLisa() {
    const controlePesquisarNoLisa = this.formulario.get('pesquisarNoLisa');
    if (controlePesquisarNoLisa) {
      controlePesquisarNoLisa.valueChanges.pipe(
        debounceTime(500),
        filter(valor => valor != null && valor.trim() !== ''),
        switchMap(valorDoCampo => this.pesquisarLisaService.buscarNoLisa(valorDoCampo))
      ).subscribe(response => {
        console.log("Resposta da API Lisa", response);
      });
    }
  }

  formularioInicial() {
    this.formulario = this.formBuilder.group({
      todosItens: [null],
      pesquisar: ['',],
      ordenarPor: [null],
      pesquisarNoLisa: ['']
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
    const { todosItens, pesquisar, ordenarPor, pesquisarNoLisa } = this.formulario.value;

    if (todosItens || pesquisar || ordenarPor || pesquisarNoLisa) {
      this.formulario.patchValue({
        todosItens: null,
        pesquisar: '',
        ordenarPor: null,
        pesquisarNoLisa: '',
      });
      console.log('Inputs limpo');
    }
  }

}