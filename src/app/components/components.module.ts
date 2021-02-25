import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    ListasComponent
  ],
  imports: [
    CommonModule,
    // Importamos el Ionic module
    IonicModule
  ], exports: [
    ListasComponent
  ]
})
export class ComponentsModule { }
