import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/providers/deseos.service';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent   {
  @ViewChild(IonList)lista: IonList;
  @Input() terminada = true;
  constructor(public deseosService: DeseosService,
              private router: Router,
              public alertController: AlertController)
  {
  }

  listaSeleccionada(lista: Lista){
   //  console.log(lista);
    if (this.terminada) {
      this.router.navigate(['/tabs/tab2/agregar', lista.id]);
    } else {
      this.router.navigate(['/tabs/tab1/agregar', lista.id]);
    }
  }

  borrarLista(lista: Lista){
    this.deseosService.borrarLista(lista);
  }

  async editarLista(lista: Lista){
    const alert = await this.alertController.create({
      header: 'Modificar Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nombre de la Lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Actualizar',
          handler: (data ) => {
            console.log(data);
            if (data.titulo.lenght === 0) {
              return;
            }
            // Guardo el nuevo nombre de la lista
            lista.titulo = data.titulo;
            this.deseosService.saveStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });
    alert.present();
  }

}
