import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CardService extends BaseService {

  constructor(http: HttpClient) { super(http) }

  getAll<Card>(url: string): Observable<Card> {
    return this.getData<Card>(`${url}`);
  }

  // Padrão
  // getAll<Card>(url: string) : Observable<Card> {
  //   return this.http.get<Card>(`${this.urlApi}${url}`);
  // }  

  // Generico
  // public getAll<T>(url: string): Observable<T> {
  //     return this.http.get<T>(`${this.urlApi}${url}`)}

}
