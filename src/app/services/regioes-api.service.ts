import { Injectable } from '@angular/core';
import { RegioesApiModel } from './regioes-api-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegioesApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://it3-klj-default-rtdb.firebaseio.com/saneamentoRegioes.json';

  public get(): Observable<RegioesApiModel[]> {
    return this.http.get<RegioesApiModel[]>(this.apiUrl);
  }
}
