import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './core/notfound/notfound.component';

const loadSuggestionsModule = () =>
  import('./features/suggestions/suggestions.module').then(
    (m) => m.SuggestionsModule
  );

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'listSuggestion', loadChildren: loadSuggestionsModule },
  { path: 'suggestions', loadChildren: loadSuggestionsModule },
  {
    path: 'users',
    loadChildren: () =>
      import('./features/users/users.module').then((m) => m.UsersModule)
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
