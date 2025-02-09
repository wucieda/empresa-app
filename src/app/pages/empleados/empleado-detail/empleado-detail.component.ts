import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../../../services/empleado.service';
import { Empleado } from '../../../models/empleado';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empleado-detail',
  imports: [CommonModule,RouterLink],
  templateUrl: './empleado-detail.component.html',
  styleUrl: './empleado-detail.component.scss'
})
export class EmpleadoDetailComponent implements OnInit {
  empleado: Empleado | undefined;

  constructor(
    private route: ActivatedRoute,
    private empleadoService: EmpleadoService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.empleado = this.empleadoService.getEmpleado(id);
  }
}