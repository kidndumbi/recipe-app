import { Component, OnInit, Input} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor(private ShopingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredients() {
    console.log(this.recipe.ingredients);
    for (let i of this.recipe.ingredients) {
      console.log(i);
      this.ShopingListService.addIngredient(new Ingredient(i.name.toString(), i.amount));
    }

      // this.emitData.emit(new Ingredient(this.name, this.amount));


  }

}
