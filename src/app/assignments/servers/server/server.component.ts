import { Component } from "@angular/core";

 @Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']

 })
 export class ServerComponent {

  serversList: string[] = ['Server1', 'Server2'];
  serverName: string = 'Server1';
  isClickedButton = false;
  serverStatus = 'UP';
  test: string = '';

  onSaveServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onClickedButton(event: Event){

    this.test = (<HTMLInputElement>event.target).value;
    //  this.isClickedButton = true;
    this.serversList.push(this.serverName);
  }

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'UP' : 'DOWN';
  }

  getServerStatus(){
    return this.serverStatus === 'UP' ? 'green' : 'red';
  }

  getWhiteContentColor(){
    return this.serverStatus === 'UP' || 'DOWN';
  }

  getServersList(){
    return this.serversList;
  }
 }
