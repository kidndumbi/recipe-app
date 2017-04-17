import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {LoggingService} from '../../logging.service';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  providers: [LoggingService]
})
export class ShoppingEditComponent implements OnInit {
  name: string;
  amount: number;
  // @Output() emitData = new EventEmitter<Ingredient>();

  constructor(private loggingService: LoggingService, private ShoppingListService: ShoppingListService) { }

  ngOnInit() {


  }

  sendData() {
    if (this.name && this.amount) {
      // this.emitData.emit(new Ingredient(this.name, this.amount));
      this.ShoppingListService.addIngredient(new Ingredient(this.name, this.amount));
    }else {
      alert('please select both');
    }
  }

}
