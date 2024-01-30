import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipe-book/recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { exhaustMap, map, take, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  itemClicked = new EventEmitter<Recipe>();
  recipeUrl = 'http://localhost:8080/recipe';

  constructor(
    private shoppingListService: ShoppingListService,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  recipes: Recipe[] = [];

  getAllRecipes() {
    // let tkn = '';
    // this.authService.token.pipe(take(1)).subscribe((respToken) => {
    //   tkn = respToken;
    // });

    // let header = new HttpHeaders().set('Authorization', `Bearer ${tkn}`);
    // Authorization: `Bearer ${token}`;
    // hdrs = hdrs.append('Authorization', `Bearer ${tkn}`);

    return this.http.get<Recipe[]>(this.recipeUrl + '/all').pipe(
      tap((respo: Recipe[]) => {
        this.recipes = respo;
      })
    );
    // return this.authService.token.pipe(
    //   take(1),
    //   exhaustMap((token) => {
    //     debugger;
    //     console.log(token);

    //     // let headersToken = new HttpHeaders();
    //     // debugger;
    //     // headersToken.set('Authorization', 'Bearer ' + token.value);
    //     const bearerToken = 'Bearer ' + token;
    //     return this.http.get<Recipe[]>(this.recipeUrl + '/all', {
    //       headers: new HttpHeaders().set('Authorization', bearerToken),
    //     });
    //   })
    //   map((recipes) => {
    //     return recipes.map((recipe) => {
    //       return {
    //         ...recipes,
    //         ingredients: recipe.ingredients ? recipe.ingredients : [],
    //       };
    //     });
    //   })
    // );
    // );
  }

  addNewIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addNewItems(ingredients);
  }

  getRecipeById(index: number) {
    return this.http.get<Recipe>(this.recipeUrl + '/by-id/' + index);
  }

  addRecipe(newRecipe: Recipe) {
    this.http.post<Recipe>(this.recipeUrl, newRecipe).subscribe((recipe) => {
      this.recipes.push(recipe);
    });
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
  }

  deleteRecipe(index: number) {
    this.http.delete<string>(this.recipeUrl + '/' + index).subscribe();
  }
}
