import { Component } from '@angular/core';
import { DeseosService } from '../../providers/deseos.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  lista: Lista[] = [];
  constructor(public deseosService: DeseosService,
              private router: Router,
              public alertController: AlertController) {
    this.lista = this.deseosService.getLista();
  }
  async agregarLista(){
    // this.router.navigateByUrl('/tabs/tab1/agregar');
    const alert = await this.alertController.create({
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la Lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data ) => {
            console.log(data);
            if (data.titulo.lenght === 0) {
              return;
            }
            // Tengo que crear la lista
            const listaId = this.deseosService.crearLista(data.titulo);
            this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
          }
        }
      ]
    });
    alert.present();
  }
  listaSeleccionada(lista: Lista){
    console.log(lista);
    this.router.navigate(['/tabs/tab1/agregar', lista.id]);
  }
}
