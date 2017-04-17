import { Injectable } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 9),
    new Ingredient('Oranges', 6)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

}
