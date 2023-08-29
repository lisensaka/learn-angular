import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './assignments/servers/server/server.component';
import { ServersComponent } from './assignments/servers/servers.component';
import { WarningAlertComponent } from './assignments/assignment1/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './assignments/assignment1/success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { TestingDataBindComponent } from './assignments/assignment2/testing-data-bind/testing-data-bind.component';
import { DisplayDetailsComponent } from './assignments/assignment3/display-details/display-details.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    TestingDataBindComponent,
    DisplayDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
