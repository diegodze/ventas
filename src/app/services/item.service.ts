import { Injectable } from '@angular/core';
import { Item } from '../modelos/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items : Item[] = [
    {
      id:0,
      title: 'marcadores',
      price: 150,
      quantity: 4,
      completed:false
    },
    {
      id:1,
      title: 'libretas',
      price: 200,
      quantity: 2,
      completed:false
    }
  ];

  addItem(item:Item){
    console.log(item.title);
    this.items.unshift(item);
  }

  getItems(){
    return this.items;
  }
  constructor() { }
}
