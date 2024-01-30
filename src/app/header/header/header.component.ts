import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() selectedHeader = new EventEmitter<string>();
  isUserLoggedIn: boolean = false;

  constructor(
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  onFetchingData() {
    return this.recipeService
      .getAllRecipes()
      .subscribe((resp) => console.log(resp));
  }

  onLogout() {
    this.authService.doLogout();
  }

  ngOnInit(): void {
    this.authService.isUserLoggedIn.subscribe(
      (res) => (this.isUserLoggedIn = res)
    );
  }
}
