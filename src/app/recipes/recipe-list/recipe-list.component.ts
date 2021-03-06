import { Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // @Output() emitRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  chosenRecipe(r) {

      // this.emitRecipe.emit(r);
    this.recipeService.recipeSelected.emit(r);
  }

  ngOnInit() {

      this.recipes = this.recipeService.getRecipe();

  }

}
