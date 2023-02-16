import { Component, Input, OnInit } from '@angular/core';
import { ProdusDisponibil } from 'src/app/pseudo-api.service';

@Component({
  selector: 'app-coffee-card',
  templateUrl: './coffee-card.component.html',
  styleUrls: ['./coffee-card.component.scss']
})
export class CoffeeCardComponent implements OnInit {

  @Input() coffee: ProdusDisponibil | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
