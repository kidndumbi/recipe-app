import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {LoggingService} from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [LoggingService]
})
export class ShoppingListComponent implements OnInit {

  arr: Array<number>= [1, 3];

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 9),
    new Ingredient('Oranges', 6)
  ];
  constructor(private loggingservice: LoggingService) { }

  ngOnInit() {
  }

  getData(e: Ingredient) {


    try {
      this.ingredients.push(e);
    } catch (ex) {
      console.log(ex); }
    this.loggingservice.logStatusChange('Ingredient adding successfully');

  }

}
