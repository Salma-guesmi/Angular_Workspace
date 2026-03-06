     import { Suggestion } from '../../models/suggestion';
import { Component } from '@angular/core';
@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrl: './list-suggestion.component.css'
})
export class ListSuggestionComponent {
  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: `Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l'équipe.`,
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      nbLikes: 10
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: `Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.`,
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: `Mise en place d'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.`,
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 4,
      title: "Moderniser l'interface utilisateur",
      description: `Refonte complète de l'interface utilisateur pour une meilleure expérience utilisateur.`,
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      nbLikes: 0
    }
  ];

  favorites: Suggestion[] = [];
  searchTerm: string = '';

  like(s: Suggestion): void {
    s.nbLikes++;
  }

  addToFavorites(s: Suggestion): void {
    const exists = this.favorites.some(f => f.id === s.id);
    if (!exists) {
      this.favorites.push(s);
    }
  }

  get filteredSuggestions(): Suggestion[] {
    const term = this.searchTerm.toLowerCase().trim();
    if (!term) return this.suggestions;
    return this.suggestions.filter(s =>
      s.title.toLowerCase().includes(term) || s.category.toLowerCase().includes(term)
    );
  }

  getStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      acceptee: 'ACCEPTEE',
      refusee: 'REFUSÉE',
      en_attente: 'EN ATTENTE'
    };
    return labels[status] || status;
  }
}
