import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificacionPageRoutingModule } from './calificacion-routing.module';

import { CalificacionPage } from './calificacion.page';
import { DatosDelAlumnoComponent } from '../datos-del-alumno/datos-del-alumno.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalificacionPageRoutingModule
  ],
  declarations: [CalificacionPage, DatosDelAlumnoComponent]
})
export class CalificacionPageModule {}
