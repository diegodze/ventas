import { Component, OnInit } from '@angular/core';
import { Item } from '../../modelos/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items:Item[] = [];
  total:number = 0;

  constructor(private itemservice:ItemService) { }

  ngOnInit(): void {
  this.items = this.itemservice.getItems();
  this.getTotal();

  }

  deleteItem(item:Item){
    this.items = this.items.filter(x => x.id != item.id)
    this.getTotal();
  }

  toggleItem(item:Item){
    this.getTotal();
  }

  getTotal(){
  this.total = this.items.filter(y => !y.completed).map(y => y.quantity * y.price).reduce((acc, y) => acc += y,0);
  }
}
