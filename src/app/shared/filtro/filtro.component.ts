import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Filtros } from 'src/app/models/filtros';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, debounceTime, filter, of, switchMap, tap } from 'rxjs';
import { PesquisarLisaService } from 'src/app/services/pesquisarLisa/pesquisar-lisa.service';
import { ApiResponse } from 'src/app/models/Lisa/api-response';

@Component({
  selector: 'app-buscar',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {
  @Output() filtros = new EventEmitter<Filtros>();

  formulario: FormGroup = new FormGroup({});
  dadosPesquisaLisa: any;
  expandedSections: { [key: string]: boolean } = {
    software: false,
    fluxoSoftwares: false,
  };

  constructor(private formBuilder: FormBuilder, private pesquisarLisaService: PesquisarLisaService) {
    this.formularioInicial();
  }

  ngOnInit() {
    this.teste();
    this.iniciarBuscaNoLisa();
  }

  teste() {
    console.log('--- Teste com o "ngOnInit" formulário completamente inicializado e pronto ---');
  }

  toggle(section: string) {
    this.expandedSections[section] = !this.expandedSections[section];
  }

  iniciarBuscaNoLisa() {
    const controlePesquisarNoLisa = this.formulario.get('pesquisarNoLisa');
    if (controlePesquisarNoLisa) {
      controlePesquisarNoLisa.valueChanges.pipe(
        debounceTime(500),
        filter(valor => valor != null && (valor as string).trim() !== ''),
        tap((valorDoCampo: any) => {
          console.log("Evento de valor emitido:", valorDoCampo);
          console.log("Campo alterado para:", valorDoCampo);
        }),
        switchMap(valorDoCampo => {
          console.log("Chamando API Lisa com valor:", valorDoCampo);
          return this.pesquisarLisaService.buscarNoLisa(valorDoCampo).pipe(
            catchError(error => {
              console.error('Erro na API:', error);
              return of([]);
            })
          )
        })
      ).subscribe(response => {
        const apiResponse = response as ApiResponse;
        this.dadosPesquisaLisa = apiResponse.dados;
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