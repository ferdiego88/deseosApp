import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  listas: Lista [] = [];
  constructor() {
    // console.log('Servicio Inicializado');
    const lista1 = new Lista('Recolectar Piedras del Infinito');
    const lista2 = new Lista('Heroes a desaparecer');
    this.listas.push(lista1, lista2);
   }
   getLista(){
     return this.listas;
   }
}
