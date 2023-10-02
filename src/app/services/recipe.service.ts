import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipe-book/recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  itemClicked = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  recipes = [
    new Recipe(
      'Chorico Mozzarella',
      'chorizo-mozarella-gnocchi-bake-cropped',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
      [
        new Ingredient('Mozzarella', 2),
        new Ingredient('Chorizo', 1),
        new Ingredient('Parmigiano', 2),
      ]
    ),
    new Recipe(
      'Prawn Fried Rice',
      'Prawn fried rice with schrimbs',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/prawn_fried_rice-2481925.jpg?quality=90&resize=440,400',
      [
        new Ingredient('Rice', 1),
        new Ingredient('Prawn', 1),
        new Ingredient('Schrimbs', 25),
      ]
    ),
  ];

  addNewIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addNewItems(ingredients);
  }
}
