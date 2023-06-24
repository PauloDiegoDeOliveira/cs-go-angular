import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/responses/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  urlApi = 'https://sistemashomologacao.suafaculdade.com.br/ObjetivoGames/api/Categoria';

  constructor(private http: HttpClient) { }

  getElements(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.urlApi);
  }

  createElements(element: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.urlApi, element);
  }

  editElement(element: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.urlApi}/${element.id_Categoria}`, element);
  }

  deleteElement(id: number): Observable<Categoria> {
    return this.http.delete<Categoria>(`${this.urlApi}/${id}`);
  }

}
