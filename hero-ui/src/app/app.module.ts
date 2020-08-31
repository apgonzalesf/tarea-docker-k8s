import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import {AppRoutingModule} from  './app.routing.module'
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  //componentes que vamos a usar
  declarations: [
    AppComponent, PersonasComponent
  ],

  //modulos , browsermodule -> angular
  imports: [
    BrowserModule ,FormsModule ,AppRoutingModule, HttpClientModule
  ],
  providers: [],
  //se define el componente raiz
  bootstrap: [AppComponent]
})
export class AppModule { }
