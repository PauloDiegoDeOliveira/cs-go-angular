import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CardService extends BaseService {

// protected urlApi: string = environment.urlApi;

constructor(http: HttpClient) { super(http) }

  getAll<Card>(url: string) : Observable<Card> {
    return this.getData<Card>(`${url}`);
  }
  
    // public getAll<T>(url: string): Observable<T> {
    //     return this.http.get<T>(`${this.urlApi}${url}`)}

}
