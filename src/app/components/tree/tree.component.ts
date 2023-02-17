import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { CafeneaSauLocalitate } from 'src/app/cafeneasaulocalitate';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input() localitati: CafeneaSauLocalitate[] | undefined;
  @Output() childEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.dataSource.data = this.unflatten(this.localitati);
  }

   unflatten(arr:any) {
    var tree = [],
        mappedArr: any = {},
        arrElem,
        mappedElem;

    for(var i = 0, len = arr.length; i < len; i++) {
      arrElem = arr[i];
      mappedArr[arrElem.id] = arrElem;
      mappedArr[arrElem.id]['children'] = [];
    }

    for (var id in mappedArr) {
      if (mappedArr.hasOwnProperty(id)) {
        mappedElem = mappedArr[id];
        if (mappedElem.idParinte) {
          mappedArr[mappedElem['idParinte']]['children'].push(mappedElem);
        }
        else {
          tree.push(mappedElem);
        }
      }
    }
    return tree;
  }

  selectCoffeeShop(id: number) {
    this.childEvent.emit(id);
  }

  private _transformer = (node: CafeneaSauLocalitate, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.denumire,
      level: level,
      id: node.id
    };
  };

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  hasChild = (_: number, node: FlatNode) => node.expandable;
}

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  id: number;
}