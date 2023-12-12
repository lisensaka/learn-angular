import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopingListComponent } from './shoping-list/shoping-list/shoping-list.component';
import { ShopingListEditComponent } from './shoping-list/shoping-list-edit/shoping-list-edit.component';
import { RecipeListComponent } from './recipe-book/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-book/recipes/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header/header.component';
import { RecipesComponent } from './recipe-book/recipes/recipes.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { AppModuleRoutes } from './appModuleRoutes.module';
import { RecipeEditComponent } from './recipe-book/recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopingListComponent,
    ShopingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipesComponent,
    DropDownDirective,
    RecipeEditComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppModuleRoutes],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
