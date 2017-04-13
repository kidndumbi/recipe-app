import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipe: Recipe = null;

  constructor() { }

  ngOnInit() {
  }

  getRecipe(e) {
    this.recipe = e;

    console.log(this.recipe);
  }

}
