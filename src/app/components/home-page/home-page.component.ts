import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public titulo='O que é saneamento básico?';
  public descricao='De acordo com a Lei 11.445/07, podemos definir como saneamento básico o conjunto de serviços, infraestruturas e instalações operacionais de abastecimento de água potável, esgotamento sanitário, limpeza urbana e manejo de resíduos sólidos e drenagem e manejo das águas pluviais urbanas, a falta de saneamento básico acarretam em varias doenças.';
  public logoUrl='https://www.eosconsultores.com.br/wp-content/uploads/2017/07/Quatro-servi%c3%a7os-do-plano-municipal-de-saneamento-b%c3%a1sico.png';

  constructor() { }

  ngOnInit(): void {
  }

}
