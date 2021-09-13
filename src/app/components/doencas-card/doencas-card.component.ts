import { Component, Input, OnInit } from '@angular/core';
import { DoencasApiModel } from 'src/app/services/doencas-api-model';

@Component({
  selector: 'app-doencas-card',
  templateUrl: './doencas-card.component.html',
  styleUrls: ['./doencas-card.component.css']
})
export class DoencasCardComponent implements OnInit {

  @Input() doencas: DoencasApiModel | undefined;
​
  constructor() { }

  ngOnInit(): void {
  }

}
