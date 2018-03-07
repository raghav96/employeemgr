import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { EmployeesComponent } from './employees/employees.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: 'welcone' },
  {
    path: 'welcome',
    redirectTo: 'employees',
    pathMatch: 'full'
  },
  {
    path: 'employees',
    component: EmployeesComponent
  }
];
