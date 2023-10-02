import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  shoppingList = [
    new Ingredient('Pasta', 1),
    new Ingredient('Pesto Sauce', 1),
    new Ingredient('Parmiggiano', 1),
    new Ingredient('Garlic', 1),
  ];

  addNewItem(ingredient: Ingredient) {
    this.shoppingList.push(ingredient);
  }

  addNewItems(ingredient: Ingredient[]) {
    //this function uses ssx in order to add all list of ingredients at once
    this.shoppingList.push(...ingredient);
  }

  removeItem(id: number) {
    this.shoppingList.slice(id);
  }
}
