import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoping-list-edit',
  templateUrl: './shoping-list-edit.component.html',
  styleUrls: ['./shoping-list-edit.component.css'],
})
export class ShopingListEditComponent implements OnInit, OnDestroy {
  // @ViewChild for getting the local reference value defined on template here on ts file
  // @ViewChild('nameInput') name: ElementRef;
  // @ViewChild('amountInput') amount: ElementRef;
  ingredientIndex: number;
  editMode = false;
  ingredientByIndex: Ingredient;
  @ViewChild('form') shoppingListForm: NgForm;

  subscription: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}

  // this is the approach using the local references and using the .value method to get the respective values from each local reference
  // onAddingNewItemUsingLocalReference(form: NgForm) {
  //   //  const newIngredient = new Ingredient(nameInput.value, amountInput.value);
  //   // this.shoppingListService.addNewItem(
  //   //   new Ingredient(
  //   //     this.name.nativeElement.value,
  //   //     this.amount.nativeElement.value
  //   //   )
  //   // );
  // }

  onAddingNewIngredientUsingService(form: NgForm) {
    const formValue = form.value;
    const newIngr = new Ingredient(formValue.name, formValue.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredientByIndex(
        this.ingredientIndex,
        newIngr
      );
      this.onClearForm();
    } else {
      this.shoppingListService.addNewItem(newIngr);
      // this.router.navigate(['../'], { relativeTo: this.activeRouter });
    }
  }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.ingredientIndex = index;
        this.editMode = true;
        this.ingredientByIndex = this.shoppingListService.getIngredientByIndex(
          this.ingredientIndex
        );

        this.shoppingListForm.setValue({
          name: this.ingredientByIndex.name,
          amount: this.ingredientByIndex.amount,
        });
      }
    );
  }

  onDeleteItem() {
    this.shoppingListService.removeItemByIndex(this.ingredientIndex);
    this.onClearForm();
  }

  onClearForm() {
    this.shoppingListForm.resetForm();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}
