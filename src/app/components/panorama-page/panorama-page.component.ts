import { Component, OnInit } from '@angular/core';
import { ProblemasApiService } from 'src/app/services/problemas-api.service';
import { ProblemasRegioesApiModel } from 'src/app/services/problemas-regioes-api-model';
import { RegioesApiModel } from 'src/app/services/regioes-api-model';
import { RegioesApiService } from 'src/app/services/regioes-api.service';

@Component({
  selector: 'app-panorama-page',
  templateUrl: './panorama-page.component.html',
  styleUrls: ['./panorama-page.component.css']
})
export class PanoramaPageComponent implements OnInit {

  listaRegioes: RegioesApiModel [] = [];
  listaProblemas: ProblemasRegioesApiModel [] = [];


  constructor(public RegioesApi: RegioesApiService, public ProblemasApi: ProblemasApiService) { }

  ngOnInit(): void {
    this.RegioesApi.get().subscribe({
      next: (retornoDaApi) => {
        this.listaRegioes = retornoDaApi;
      }
    });

    this.ProblemasApi.get().subscribe({
      next: (retornoProblemas) => {
        this.listaProblemas = retornoProblemas;
      }
    })
​
  }

}
