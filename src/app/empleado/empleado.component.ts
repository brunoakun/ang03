import { getTestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  // ATRIBUTOS de la clase Empleado 
  //_nombre = 'Bruno';
  _edad = 5;
  //nombre = '';

  constructor() {
  }

  // GETTERS Y SETTERS
  //get nombre(): string { return this._nombre; }
  get edad(): number { return this._edad; }


  // METODOS

  ngOnInit(): void {
    console.log(this.edad);
  }

  cambiaNombre(nombre: string): string {
    return (nombre);
  }

}
