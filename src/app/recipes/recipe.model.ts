import {Ingredient} from '../shared/ingredient.model';
/**
 * Created by Cassava on 4/6/2017.
 */
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, description: string, imagePath: string, ingredienst: Ingredient[]) {
     this.name = name;
     this.description = description;
     this.imagePath = imagePath;
     this.ingredients = ingredienst;
  }

}
