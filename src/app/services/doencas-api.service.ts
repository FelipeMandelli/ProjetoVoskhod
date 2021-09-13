import { Injectable } from '@angular/core';
import { DoencasApiModel } from './doencas-api-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoencasApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://it3-klj-default-rtdb.firebaseio.com/saneamentoDoencas.json';

  public get(): Observable<DoencasApiModel[]> {
    return this.http.get<DoencasApiModel[]>(this.apiUrl);
  }
}
