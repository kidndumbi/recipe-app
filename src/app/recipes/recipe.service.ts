import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/01/08/08/31/paella-1127334_960_720.jpg', [
      new Ingredient('meat', 1),
      new Ingredient('paw paw', 2),
      new Ingredient('pork', 3)

    ]),
    new Recipe('Second recipe', 'This is simply a test', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTbnMvC3Hsa7hCo4LlizmxCwqlaYKUadOEskWuXEUpG8yhvVa8E', [
      new Ingredient('peanut', 1),
      new Ingredient('orange', 2),
      new Ingredient('pork', 3)
    ]),
    new Recipe('Third recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/640px-Chicken-kathi-roll-recipe.jpg', [
      new Ingredient('Berries', 1),
      new Ingredient('paw paw', 2),
      new Ingredient('pork', 3)
    ]),
    new Recipe('fourth recipe', 'This is simply a test', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRpGdr_SnetaYnH4mKII5dqx9lDI6_juo2QPl0rvztlSlfIUg', [
      new Ingredient('Yams', 1),
      new Ingredient('paw paw', 2),
      new Ingredient('pork', 3)
    ]),
    new Recipe('fifth recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/d/df/Dahi_baigana_Odia_recipe.jpg', [
      new Ingredient('Flour', 1),
      new Ingredient('Grapes', 2),
      new Ingredient('pork', 3)
    ]),
  ];

  constructor() { }

  getRecipe() {
    return this.recipes.slice();
  }

}
