import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PesquisarLisaService {
  constructor(private http: HttpClient) { }

  buscarNoLisa(query: string) {
    return this.http.get<any>('https://localhost:44305/v1/softwares/pesquisa', { params: { Pesquisa: query } });
  }
}
