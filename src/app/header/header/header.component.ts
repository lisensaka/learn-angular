import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  collapsed = true;
  @Output() selectedHeader = new EventEmitter<string>();

  onSelectRecipe(value: string) {
    this.selectedHeader.emit(value);
  }

  onSelectShoppingList(value) {
    this.selectedHeader.emit(value);
  }
}
