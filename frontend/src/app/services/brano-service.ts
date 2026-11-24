import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Brano } from '../models/brano';

@Injectable({ providedIn: 'root' })
export class BranoService {
  private http = inject(HttpClient);
  private url = '/api/brani';

  getBrani(): Observable<Brano[]> {
    return this.http.get<Brano[]>(this.url);
  }
}