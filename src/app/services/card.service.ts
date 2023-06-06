import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../models/responses/card';

@Injectable({
  providedIn: 'root'
})
export class CardService  {

public urlApi: string = environment.urlApi;

constructor(private http: HttpClient) { }

  getAll<Card>(url: string) : Observable<Card> {
    return this.http.get<Card>(`${this.urlApi}${url}`);
  }
  
    // public getAll<T>(url: string): Observable<T> {
    //     return this.http.get<T>(`${this.urlApi}${url}`)}

}
