import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';

const routes: Routes = [
  { path: 'accueil', component: HomeComponent },
  { path: 'suggestions', component: ListSuggestionComponent },
  { path: '', redirectTo: '/suggestions', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
