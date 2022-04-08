import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PublicarService {
  datoscambios = new EventEmitter();
  constructor() { }
}
