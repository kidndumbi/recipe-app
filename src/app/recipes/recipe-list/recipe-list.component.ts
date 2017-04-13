import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() emitRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/01/08/08/31/paella-1127334_960_720.jpg'),
    new Recipe('Second recipe', 'This is simply a test', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTbnMvC3Hsa7hCo4LlizmxCwqlaYKUadOEskWuXEUpG8yhvVa8E'),
    new Recipe('Third recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/640px-Chicken-kathi-roll-recipe.jpg'),
    new Recipe('fourth recipe', 'This is simply a test', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRpGdr_SnetaYnH4mKII5dqx9lDI6_juo2QPl0rvztlSlfIUg'),
    new Recipe('fifth recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/d/df/Dahi_baigana_Odia_recipe.jpg'),
  ];

  constructor() { }

  chosenRecipe(r) {

      this.emitRecipe.emit(r);
  }

  ngOnInit() {
  }

}
