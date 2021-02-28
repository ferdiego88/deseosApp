import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  listas: Lista [] = [];
  constructor() {
    this.loadStorage();
    // console.log('Servicio Inicializado');
    // const lista1 = new Lista('Recolectar Piedras del Infinito');
    // const lista2 = new Lista('Heroes a desaparecer');
    // this.listas.push(lista1, lista2);
   }
   getLista(){
     return this.listas;
   }
   crearLista(titulo: string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.saveStorage();
    return nuevaLista.id;
   }

   borrarLista(lista: Lista){
      this.listas = this.listas.filter(listaData => listaData.id !== lista.id);
      this.saveStorage();
   }

   obtenerLista(id: string | number){
    id = Number(id);
    return this.listas.find(listaData => listaData.id === id);
   }

   saveStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas));
   }

   loadStorage(){
     if (localStorage.getItem('data')) {
       this.listas = JSON.parse(localStorage.getItem('data'));
     }else{
       this.listas = [];
     }
   }
}
