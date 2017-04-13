import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, AfterContentInit {

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {

     console.log(this.recipe);
  }

}
