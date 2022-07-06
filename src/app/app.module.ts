import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchRestaurantComponent } from './search-restaurant/search-restaurant.component';
import { ViewfoodComponent } from './viewfood/viewfood.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchRestaurantComponent,
    ViewfoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
