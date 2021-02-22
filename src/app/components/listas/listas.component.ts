import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/providers/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent   {
  lista: Lista[] = [];
  @Input() terminada = true;
  constructor(private deseosService: DeseosService,
              private router: Router)
  {
    this.lista = this.deseosService.getLista();
  }

  listaSeleccionada(lista: Lista){
   //  console.log(lista);
    if (this.terminada) {
      this.router.navigate(['/tabs/tab2/agregar', lista.id]);
    } else {
      this.router.navigate(['/tabs/tab1/agregar', lista.id]);
    }
  }

}
