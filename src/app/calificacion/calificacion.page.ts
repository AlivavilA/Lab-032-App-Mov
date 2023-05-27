import { Component, OnInit } from '@angular/core';
import { Calificacion } from '../calificacion';
import { CalificacionService } from '../service/calificacion.service';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.page.html',
  styleUrls: ['./calificacion.page.scss'],
})
export class CalificacionPage implements OnInit {
  
  calificaciones:Calificacion[]=[];
  materia: string ='';
  aprobado: string = '';
  calificacion: number = 0;
  estado: string = '';
  idActualizar: any|number = 0;
  error: boolean = false;


  constructor(private calificacionService: CalificacionService) { }

  ngOnInit() {
    this.calificacionService.setCalificaciones([
      {id:1, materia: 'Filosofia',
      calificacion: 100,aprobado: 'Aprobado'},
      {id:2, materia: 'Historia',
      calificacion: 80,aprobado: 'Aprobado'},
      {id:3, materia: 'Geografia',
      calificacion: 50,aprobado: 'Reprobado'}
    ]);

    this.calificaciones = this.calificacionService.getCalificaciones();
    this.estado ='guardar';
  }

  public guardar(){
    if( (this.materia == undefined || this.materia == '' ) || 
      (this.aprobado != 'Aprobado' && this.aprobado != 'Reprobado') ||
      (this.calificacion > 100 || this.calificacion < 0)  ) {
      this.error = true;
      return;
    }  
    let calificacion: Calificacion={
      materia: this.materia,
      aprobado: this.aprobado,
      calificacion: this.calificacion
    };
    if (this.estado ==='actualizar'){
      calificacion.id = this.idActualizar;
      this.calificaciones = this.calificacionService.actualiza(calificacion);
    }
    if(this.estado === 'guardar'){
      this.calificacionService.agregarCalificacion(calificacion);
      this.calificaciones = this.calificacionService.getCalificaciones();
    }
    this.cancelar();
  }

  public cancelar(){
    this.estado = 'guardar';
    this.materia = '';
    this.aprobado = '';
    this.calificacion = 0;
    this.error = false;
  }

  public eliminar(id:number){
    this.calificacionService.borrarCalificacion(id);
    this.calificaciones = this.calificacionService.getCalificaciones();
  }

  public editar(calificacion:Calificacion){
    this.estado = 'actualizar';
    this.materia = calificacion.materia;
    this.aprobado = calificacion.aprobado;
    this.calificacion = calificacion.calificacion;
    this.idActualizar = calificacion.id;
  }

}