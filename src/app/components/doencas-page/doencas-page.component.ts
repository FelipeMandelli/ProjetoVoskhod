import { Component, OnInit } from '@angular/core';
import { DoencasApiModel } from 'src/app/services/doencas-api-model';
import { DoencasApiService } from 'src/app/services/doencas-api.service';

@Component({
  selector: 'app-doencas-page',
  templateUrl: './doencas-page.component.html',
  styleUrls: ['./doencas-page.component.css']
})
export class DoencasPageComponent implements OnInit {
  listaDeDoencas: DoencasApiModel[] = [];
  ​
    constructor(public doencasApi: DoencasApiService) { }
  ​
    ngOnInit(): void {
      this.doencasApi.get().subscribe({
        next: (retornoDaApi) => {
          this.listaDeDoencas = retornoDaApi;
        }
      });
  ​
    }
  ​






 // constructor() { }

 // ngOnInit(): void {
 // }

}
