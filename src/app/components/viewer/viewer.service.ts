import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pet } from './../../models/general.models'


@Injectable({
  providedIn: 'root'
})
export class ViewerService {
  private apiUrl = 'http://localhost:5188/api/Pets';

  constructor(private http: HttpClient) { }

  getAllPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.apiUrl}/getPets`)
  }

  deletePet(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deletePet/${id}`);
  }
}
