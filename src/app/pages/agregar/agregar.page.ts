import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/providers/deseos.service';
import { ListaItem } from '../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  lista: Lista;
  nombreItem = '';
  constructor(private deseosService: DeseosService,
              private activatedRoute: ActivatedRoute)
  {
    const listaId = this.activatedRoute.snapshot.paramMap.get('listaId');
    this.lista = this.deseosService.obtenerLista(listaId);
    console.log(this.lista);
  }

  ngOnInit() {
  }

  addItem(){
    if (this.nombreItem.length === 0) {
      return;
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem = '';
    this.deseosService.saveStorage();
  }

  changeCheck(item: ListaItem){
    // console.log(item);
    const pendientes = this.lista.items
      .filter(itemData => !itemData.completado).length;
    // console.log({pendientes});
    if (pendientes === 0) {
      this.lista.terminadaEn = new Date();
      this.lista.completada = true;
    }else{
      this.lista.terminadaEn = null;
      this.lista.completada = false;
    }
    this.deseosService.saveStorage();
    console.log(this.deseosService.listas);
  }
  deleteTask(indexTask: number){
    this.lista.items.splice(indexTask , 1);
    this.deseosService.saveStorage();
  }

}
