import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'src/app/models/Lisa/api-response';

@Injectable({
  providedIn: 'root'
})
export class PesquisarLisaService {
  private baseUrl = 'https://localhost:44305/v1/softwares';

  constructor(private http: HttpClient) { }
  
  buscarNoLisa(query: string, quantidade: number) {
    return this.http.get<ApiResponse>(`${this.baseUrl}/pesquisa-geral`, { 
      params: { 
        Pesquisa: query, 
        Quantidade: quantidade 
      }
    });
  }

}
