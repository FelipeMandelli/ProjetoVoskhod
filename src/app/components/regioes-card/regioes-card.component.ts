import { Component, Input, OnInit } from '@angular/core';
import { ProblemasRegioesApiModel } from 'src/app/services/problemas-regioes-api-model';
import { RegioesApiModel } from 'src/app/services/regioes-api-model';

@Component({
  selector: 'app-regioes-card',
  templateUrl: './regioes-card.component.html',
  styleUrls: ['./regioes-card.component.css']
})
export class RegioesCardComponent implements OnInit {

  @Input() Regiao: RegioesApiModel | undefined;

  listaProblemas: ProblemasRegioesApiModel [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
