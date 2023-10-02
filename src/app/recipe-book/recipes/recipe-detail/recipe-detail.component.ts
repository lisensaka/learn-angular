import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  constructor(
    // private shoppingListService: ShoppingListService
    private recipeService: RecipeService
  ) {}

  addToshoppingList(recipe: Recipe) {
    // recipe.ingredients.forEach((ingredient: Ingredient) => {
    //   this.shoppingListService.addNewItem(ingredient);
    // });

    // this.shoppingListService.addNewItems(this.recipeClicked.ingredients);
    this.recipeService.addNewIngredients(recipe.ingredients);
  }
  @Input() recipeClicked: Recipe;
}
