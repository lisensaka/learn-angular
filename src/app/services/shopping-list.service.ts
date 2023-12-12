import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  startedEditing = new Subject<number>();

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

  removeItemByIndex(index: number) {
    this.shoppingList.splice(index, 1);
  }

  getIngredientByIndex(index: number): Ingredient {
    return this.shoppingList[index];
  }

  updateIngredientByIndex(ingredientIndex: number, newIngredient: Ingredient) {
    const updatedIngredient = this.getIngredientByIndex(ingredientIndex);
    updatedIngredient.name = newIngredient.name;
    updatedIngredient.amount = newIngredient.amount;
  }
}
