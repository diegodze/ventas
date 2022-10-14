import { Injectable } from '@angular/core';
import { Item } from '../modelos/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items : Item[] = [
    {
      id:0,
      title: 'Ipad',
      price: 14050,
      quantity: 1,
      completed:false
    },
    {
      id:1,
      title: 'Iphone',
      price: 20000,
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
