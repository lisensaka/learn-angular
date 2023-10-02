import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipeItemClicked: Recipe;

  constructor(private recipeSErvice: RecipeService) {}
  ngOnInit(): void {
    this.recipeSErvice.itemClicked.subscribe(
      (recipeSelected: Recipe) => (this.recipeItemClicked = recipeSelected)
    );
  }
}
