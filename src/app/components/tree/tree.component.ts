import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CafeneaSauLocalitate } from 'src/app/cafeneasaulocalitate';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input() localitati: CafeneaSauLocalitate[] | undefined;
  @Output() childEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  selectCoffeeShop(id: number) {
    this.childEvent.emit(id);
  }

}
