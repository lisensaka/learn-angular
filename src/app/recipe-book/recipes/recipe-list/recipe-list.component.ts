import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() itemClicked = new EventEmitter<Recipe>();

  recipeList: Recipe[] = [
    new Recipe(
      'item 1',
      'item 1 description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'
    ),
    new Recipe(
      'item 2',
      'item 2 description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/prawn_fried_rice-2481925.jpg?quality=90&resize=440,400'
    ),
  ];

  itemClickedOnItemTemplate(itemClickedData: Recipe) {
    this.itemClicked.emit(itemClickedData);
  }
}
