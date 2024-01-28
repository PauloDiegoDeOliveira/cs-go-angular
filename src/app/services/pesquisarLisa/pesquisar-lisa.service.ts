import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PesquisarLisaService {
  private baseUrl = 'https://localhost:44305/v1/softwares';

  constructor(private http: HttpClient) { }

  buscarNoLisa(query: string) {
    return this.http.get<any>(`${this.baseUrl}/pesquisa`, { params: { Pesquisa: query } });
  }

}
