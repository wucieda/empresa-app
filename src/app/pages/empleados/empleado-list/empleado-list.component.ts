import { Component,inject, OnInit } from '@angular/core';
import { EmpleadoService } from '../../../services/empleado.service';
import { Empleado } from '../../../models/empleado';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-empleado-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './empleado-list.component.html',
  styleUrl: './empleado-list.component.scss'
})
export class EmpleadoListComponent implements OnInit {

  empleados: Empleado[] = [];
  empleadoSeleccionado: Empleado | undefined;
  modal: any;

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.empleados = this.empleadoService.getEmpleados();
    
  }

  abrirModal(empleado: Empleado) {
    this.empleadoSeleccionado = empleado;
    this.modal.show();
  }

  eliminarEmpleado() {
    if (this.empleadoSeleccionado) {
      this.empleadoService.eliminarEmpleado(this.empleadoSeleccionado.id!);
      this.empleados = this.empleadoService.getEmpleados();
      this.modal.hide();
    }
  }
}