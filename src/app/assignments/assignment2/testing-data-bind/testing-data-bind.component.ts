import { Component } from '@angular/core';

@Component({
  selector: 'app-testing-data-bind',
  templateUrl: './testing-data-bind.component.html',
  styleUrls: ['./testing-data-bind.component.css']
})
export class TestingDataBindComponent {

  username: string = '';

  isUsernameEmpty(){
    return this.username === '';
  }

  onEmtpyUsername(){
    this.username = '';
  }
}
