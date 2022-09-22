import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from './students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient: HttpClient) { }
  getStudent():Observable<Students> {
    return this._httpClient.get<Students>('https://62b9299dff109cd1dc8ca34f.mockapi.io/students');
  }
  sortStudent(column: string, order:string): Observable<Students>{
  return this._httpClient.get<Students>('https://62b9299dff109cd1dc8ca34f.mockapi.io/students'+'?sortBy='+column+'&order='+order);
  }
  editStudent(column: string, order:string): Observable<Students>{
    return this._httpClient.get<Students>('https://62b9299dff109cd1dc8ca34f.mockapi.io/students'+'?sortBy='+column+'&order='+order);
    }
  deleteStudent(id:string) {
    return this._httpClient.delete('https://62b9299dff109cd1dc8ca34f.mockapi.io/students'+'/'+id);
  }
  
}
