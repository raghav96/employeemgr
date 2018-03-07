import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeesService {

  constructor(private Http: Http) { }

  // Get all posts from the API
  getAllEmployees() {
    return this.Http.get('/api/employees')
      .map(res => res.json());
  }
}
