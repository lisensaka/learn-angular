import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'learn-angular';
  selectedHeader: string = 'recipe';
  recipeFeatureSelectedShoppingList: string = '';
  test: string = '';

  onNavigationSelectRecipe(navigationValue: string) {
    // this.recipeFeatureSelectedShoppingList = '';
    this.selectedHeader = navigationValue;
  }

  onNavigationSelectShoppingList(navigationValue: string) {
    // this.recipeFeatureSelectedRecipe = '';
    // this.recipeFeatureSelectedShoppingList = navigationValue;
  }

  ngOnInit(): void {
    // this.recipeFeatureSelectedRecipe = 'receipe';
  }
}
