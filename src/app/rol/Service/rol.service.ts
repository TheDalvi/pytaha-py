import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RolService {
  datoscambios = new EventEmitter();
  constructor() { }
}
