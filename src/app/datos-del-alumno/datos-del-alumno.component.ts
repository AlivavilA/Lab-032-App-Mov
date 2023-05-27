import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Calificacion } from 'src/app/calificacion';

@Component({
  selector: 'app-datos-alumno',
  
  templateUrl: './datos-del-alumno.component.html',
  styleUrls: ['./datos-del-alumno.component.scss'],
})
export class DatosDelAlumnoComponent implements OnInit {
  
  @Input() calificacionList:Calificacion[] =[];
  @Output() eliminar: any = new EventEmitter<Calificacion[]>();
  @Output() editar:  any = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

}