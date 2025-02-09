import { Routes } from '@angular/router';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { EmpleadoListComponent } from './pages/empleados/empleado-list/empleado-list.component';
import { EmpleadoDetailComponent } from './pages/empleados/empleado-detail/empleado-detail.component';
import { EmpleadoFormComponent } from './pages/empleados/empleado-form/empleado-form.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { AlmacenComponent } from './pages/almacen/almacen.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';



export const routes: Routes = [
    { path: 'calendario', component: CalendarioComponent },
    { path: 'empleados', component: EmpleadoListComponent },
    { path: 'empleados/nuevo', component: EmpleadoFormComponent },
    { path: 'empleados/:id', component: EmpleadoDetailComponent },
    { path: 'empleados/editar/:id', component: EmpleadoFormComponent },
    { path: 'ventas', component: VentasComponent },
    { path: 'almacen', component: AlmacenComponent },
    { path: 'configuracion', component: ConfiguracionComponent },
    { path: '', redirectTo: '/calendario', pathMatch: 'full' }
];
