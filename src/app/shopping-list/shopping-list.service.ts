import { Injectable, EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {

  ingredientchanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 9),
    new Ingredient('Oranges', 6)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientchanged.emit(this.ingredients.slice());
  }

}
