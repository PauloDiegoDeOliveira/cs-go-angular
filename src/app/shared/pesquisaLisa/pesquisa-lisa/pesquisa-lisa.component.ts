import { Component, EventEmitter, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup } from '@angular/forms';
import { catchError, debounceTime, filter, of, switchMap, tap } from 'rxjs';
import { ApiResponse } from 'src/app/models/Lisa/api-response';
import { Filtros } from 'src/app/models/filtros';
import { PesquisarLisaService } from 'src/app/services/pesquisarLisa/pesquisar-lisa.service';

@Component({
  selector: 'app-pesquisa-lisa',
  templateUrl: './pesquisa-lisa.component.html',
  styleUrls: ['./pesquisa-lisa.component.scss']
})
export class PesquisaLisaComponent {
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
    this.iniciarBuscaNoLisa();
  }

  formularioInicial() {
    this.formulario = this.formBuilder.group({
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
          return this.pesquisarLisaService.buscarNoLisa(valorDoCampo, 5).pipe(
            catchError(error => {
              console.error('Erro na API:', error);
              return of([]);
            })
          )
        })
      ).subscribe(response => {
        const apiResponse = response as ApiResponse;
        this.dadosPesquisaLisa = apiResponse.dados;
        console.log(this.dadosPesquisaLisa);
      });
    }
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

