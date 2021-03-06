import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import{ NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContractComponent } from './contract/contract.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';

import { EditService } from './services/edit.service';

import{AppRoutingModule} from './app.routes'

// Import the ButtonsModule...
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';

// import {initializedRoutes} from "./app.routes";


/* Loading CLDR data
 * http://www.telerik.com/kendo-angular-ui/components/internationalization/

import { load } from '@progress/kendo-angular-intl';

import * as likelySubtags from 'cldr-data/supplemental/likelySubtags.json';
import * as weekData from 'cldr-data/supplemental/weekData.json';
import * as currencyData from 'cldr-data/supplemental/currencyData.json';
import * as numbers from 'cldr-data/main/de/numbers.json';
import * as timeZoneNames from 'cldr-data/main/de/timeZoneNames.json';
import * as calendar from 'cldr-data/main/de/ca-gregorian.json';
import * as currencies from 'cldr-data/main/de/currencies.json';
import * as dateFields from 'cldr-data/main/de/dateFields.json';

load(
    likelySubtags,
    weekData,
    currencyData,
    numbers,
    currencies,
    calendar,
    dateFields,
    timeZoneNames
);

*/

@NgModule({
 

  imports: [
    BrowserModule, 
    FormsModule,
    GridModule,
    ReactiveFormsModule, 
    HttpModule,
    JsonpModule, 
    AppRoutingModule, 
    BrowserAnimationsModule, 
    AngularFontAwesomeModule, 
    DialogModule, 
    NgbModule.forRoot(),
    ButtonsModule,
    InputsModule,
    DropDownsModule

    // ... and register it
  ],
  

  declarations: [
    AppComponent, 
    LoginComponent, 
    ContractComponent, 
    CreateContractComponent
  ],
  providers: [EditService],

  bootstrap: [AppComponent]
})
export class AppModule { }

