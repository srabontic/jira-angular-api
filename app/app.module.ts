import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { RequiredTextboxComponent } from './controlValueAccessor/required-textbox.component';
//import { PhoneTextboxComponent } from './controlValueAccessor/phone-textbox.component';
import { CamelToTitlePipe } from './shared/camel-to-title.pipe';
import { DataService } from './shared/services/data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, HttpModule ],
  declarations: [ AppComponent, AppRoutingModule.components,  CamelToTitlePipe ],
  providers:    [ DataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }