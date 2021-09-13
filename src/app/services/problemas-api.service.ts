import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProblemasRegioesApiModel } from './problemas-regioes-api-model';

@Injectable({
  providedIn: 'root'
})
export class ProblemasApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://it3-klj-default-rtdb.firebaseio.com/saneamentoRegioes.json';

  public get(): Observable<ProblemasRegioesApiModel[]> {
    return this.http.get<ProblemasRegioesApiModel[]>(this.apiUrl);
  }

}
