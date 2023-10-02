import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropDownDirective {
  @HostBinding('class.open') toggleOpen = false;

  @HostListener('document:click', ['$event']) isClicked(event: Event) {
    this.toggleOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.toggleOpen
      : false;
  }
  constructor(private elRef: ElementRef) {}
}
