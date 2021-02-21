import { Component } from '@angular/core';
import { DeseosService } from '../../providers/deseos.service';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  lista: Lista[] = [];
  constructor(public deseosService: DeseosService) {
    this.lista = this.deseosService.getLista();
  }
}
