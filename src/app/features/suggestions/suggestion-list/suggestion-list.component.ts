import { Component } from '@angular/core';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionDataService } from '../../../core/services/suggestion-data.service';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrl: './suggestion-list.component.css'
})
export class SuggestionListComponent {
  searchTerm = '';

  favorites: Suggestion[] = [];

  constructor(private readonly suggestionData: SuggestionDataService) {}

  get suggestions(): Suggestion[] {
    return this.suggestionData.suggestions;
  }

  get filteredSuggestions(): Suggestion[] {
    const q = this.searchTerm.trim().toLowerCase();
    if (!q) {
      return this.suggestions;
    }
    return this.suggestions.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
    );
  }

  statusLabel(s: Suggestion): string {
    const map: Record<string, string> = {
      acceptee: 'ACCEPTÉE',
      refusee: 'REFUSÉE',
      en_attente: 'EN ATTENTE'
    };
    return map[s.status] ?? s.status.toUpperCase();
  }

  badgeClass(s: Suggestion): string {
    switch (s.status) {
      case 'acceptee':
        return 'badge badge--accepted';
      case 'refusee':
        return 'badge badge--refused';
      default:
        return 'badge badge--pending';
    }
  }

  like(s: Suggestion): void {
    s.nbLikes++;
  }

  addFavorite(s: Suggestion): void {
    if (!this.favorites.some((f) => f.id === s.id)) {
      this.favorites = [...this.favorites, s];
    }
  }

  isFavorite(s: Suggestion): boolean {
    return this.favorites.some((f) => f.id === s.id);
  }
}
