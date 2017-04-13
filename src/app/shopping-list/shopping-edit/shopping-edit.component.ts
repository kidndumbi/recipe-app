import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  name: string;
  amount: number;
  @Output() emitData = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  sendData() {
    if (this.name || this.amount){
      this.emitData.emit(new Ingredient(this.name, this.amount));
    }
  }

}
