import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListSuggestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
