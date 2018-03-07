import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from "./login/login.component";

import { AuthService } from "./auth/auth.service";
import { CallbackComponent } from "./callback/callback.component";

import { EmployeesService } from './employees.service';

// Define the routes
const ROUTES = [
  {
  path: 'welcome',
  redirectTo: 'employees',
  pathMatch: 'full'
  },
  {
  path: 'employees',
  component: EmployeesComponent
  },
  { path: '', component: LoginComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    LoginComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [EmployeesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
