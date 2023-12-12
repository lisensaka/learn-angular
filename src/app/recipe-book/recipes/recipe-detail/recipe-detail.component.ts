import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeClicked: Recipe;
  id: number;

  constructor(
    // private shoppingListService: ShoppingListService
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.recipeClicked = this.recipeService.getRecipeById(this.id);
    });
  }

  addToshoppingList(recipe: Recipe) {
    this.recipeService.addNewIngredients(recipe.ingredients);
  }

  onEditRecipe() {
    //relative path
    this.route.navigate(['edit'], { relativeTo: this.activatedRoute });

    //absolute path
    // this.route.navigate(['/recipes', this.id, 'edit'], {
    //   relativeTo: this.activatedRoute,
    // });
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.route.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
