import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../../../services/empleado.service';
import { Empleado } from '../../../models/empleado';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado-form',
  imports: [FormsModule],
  templateUrl: './empleado-form.component.html',
  styleUrl: './empleado-form.component.scss'
})
export class EmpleadoFormComponent implements OnInit {
  empleado: Empleado = { nombre: '', cargo: '', salario: 0 };
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private empleadoService: EmpleadoService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.empleado = { ...this.empleadoService.getEmpleado(Number(id))! };
    }
  }

  guardarEmpleado() {
    if (this.isEdit) {
      this.empleadoService.actualizarEmpleado(this.empleado.id!, this.empleado);
    } else {
      this.empleadoService.agregarEmpleado(this.empleado);
    }
    this.router.navigate(['/empleados']);
  }
}