import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  datoscambios = new EventEmitter();
  constructor() { }
}
