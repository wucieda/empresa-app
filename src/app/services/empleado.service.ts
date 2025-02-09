import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private empleados: Empleado[] = [
    { id: 1, nombre: 'Juan Pérez', cargo: 'Desarrollador', salario: 3000 },
    { id: 2, nombre: 'María López', cargo: 'Diseñadora', salario: 2800 }
  ];

  constructor() { }

  getEmpleados(): Empleado[] {
    return this.empleados;
  }

  getEmpleado(id: number): Empleado | undefined {
    return this.empleados.find(emp => emp.id === id);
  }

  agregarEmpleado(empleado: Empleado): void {
    empleado.id = this.empleados.length + 1;
    this.empleados.push(empleado);
  }

  actualizarEmpleado(id: number, empleado: Empleado): void {
    const index = this.empleados.findIndex(emp => emp.id === id);
    if (index !== -1) this.empleados[index] = empleado;
  }

  eliminarEmpleado(id: number): void {
    this.empleados = this.empleados.filter(emp => emp.id !== id);
  }
}
