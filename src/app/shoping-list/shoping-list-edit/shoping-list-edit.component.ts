import { Component, ElementRef, ViewChild } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoping-list-edit',
  templateUrl: './shoping-list-edit.component.html',
  styleUrls: ['./shoping-list-edit.component.css'],
})
export class ShopingListEditComponent {
  // @Output() itemCreated = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  // this is the approach using the local references and using the .value method to get the respective values from each local reference
  onAddingNewItemUsingLocalReference() {
    //  const newIngredient = new Ingredient(nameInput.value, amountInput.value);
    this.shoppingListService.addNewItem(
      new Ingredient(
        this.name.nativeElement.value,
        this.amount.nativeElement.value
      )
    );
    // this.itemCreated.emit(newIngredient);
  }

  // this approach is using the ViewChilde decorations in order to read the values from local references defined in template
  // onAddingNewItemUsingViewChildDecorator() {
  //   const newIngredient = new Ingredient(
  //     this.name.nativeElement.value,
  //     this.amount.nativeElement.value
  //   );
  //   this.itemCreated.emit(newIngredient);
  // }
}
