import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent {

  nrClicks = [];
  isClicked = false;
  counter = 0;

  isTotNrGreaterThan5 = false;


  onClickButton(){
    if(this.isClicked){
      this.isClicked = false;
    }else {
      this.isClicked = true;
    }


    this.counter++;
    this.nrClicks.push(this.nrClicks.length +1);
  }

  checkNrClicksLength(){
    return this.nrClicks.length > 5;
  }

}
