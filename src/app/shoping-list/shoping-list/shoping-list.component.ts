import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.shoppingList;
  }

  onEditIngredient(ingredientIndex: number) {
    // console.log(ingredientIndex);
    this.shoppingListService.startedEditing.next(ingredientIndex);
  }
  // addingNewValueToIngredientList(newIngredient: Ingredient) {
  //   this.ingredients.push(newIngredient);
  // }
}
