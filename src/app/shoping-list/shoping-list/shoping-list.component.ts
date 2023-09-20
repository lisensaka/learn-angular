import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShopingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Pasta', 1),
    new Ingredient('Pesto Sauce', 1),
    new Ingredient('Parmiggiano', 1),
    new Ingredient('Garlic', 1),
  ];

  addingNewValueToIngredientList(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }
}
