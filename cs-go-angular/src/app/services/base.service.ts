import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected urlApi: string = environment.urlApi;

  constructor() { }
}
