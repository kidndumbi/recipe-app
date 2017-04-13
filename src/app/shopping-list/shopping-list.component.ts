import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  arr: Array<number>= [1, 3];

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 9),
    new Ingredient('Oranges', 6)
  ];
  constructor() { }

  ngOnInit() {
  }

  getData(e: Ingredient) {
    this.ingredients.push(e);
  }

}
