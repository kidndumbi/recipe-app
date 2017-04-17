import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {LoggingService} from '../logging.service';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [LoggingService]
})
export class ShoppingListComponent implements OnInit {

  arr: Array<number>= [1, 3];
  ingredients: Ingredient[];


  constructor(private loggingservice: LoggingService , private ShoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.ShoppingListService.getIngredients();

    this.ShoppingListService.ingredientchanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }


}
