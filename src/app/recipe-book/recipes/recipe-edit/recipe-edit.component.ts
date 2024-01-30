import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  customForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.editMode = param['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let imagePath = '';
    let description = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeById(this.id).subscribe();
      console.log(recipe);
      // recipeName = recipe.name;
      // imagePath = recipe.imagePath;
      // description = recipe.description;
      // if (recipe['ingredients']) {
      //   for (let ingredient of recipe.ingredients) {
      //     recipeIngredients.push(
      //       new FormGroup({
      //         name: new FormControl(ingredient.name, Validators.required),
      //         amount: new FormControl(ingredient.amount, [
      //           Validators.required,
      //           Validators.pattern(/^[1-9]+[0-9]*$/),
      //         ]),
      //       })
      //     );
      //   }
      // }
    }

    this.customForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(imagePath, Validators.required),
      description: new FormControl(description, Validators.required),
      ingredients: recipeIngredients,
      id: new FormControl(this.id),
    });
  }

  onAddIngredient() {
    (<FormArray>this.customForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  onSubmit() {
    const newRecipe = new Recipe(
      this.customForm.value['name'],
      this.customForm.value['description'],
      this.customForm.value['imagePath'],
      this.customForm.value['ingredients']
    );

    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.customForm.value);
      this.route.navigate(['../'], { relativeTo: this.activatedRoute });
    } else {
      this.recipeService.addRecipe(this.customForm.value);
      this.route.navigate(['../'], { relativeTo: this.activatedRoute });
    }
  }

  getControls() {
    // a getter!
    return (<FormArray>this.customForm.get('ingredients')).controls;
  }

  get ingredients() {
    return <FormArray>this.customForm.get('ingredients');
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.customForm.get('ingredients')).removeAt(index);
  }

  onCancel() {
    this.route.navigate(['../../'], { relativeTo: this.activatedRoute });
  }
}
