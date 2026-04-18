import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionDataService } from '../../../core/services/suggestion-data.service';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrl: './suggestion-details.component.css'
})
export class SuggestionDetailsComponent implements OnInit, OnDestroy {
  suggestion: Suggestion | undefined;
  private sub?: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly suggestionData: SuggestionDataService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.suggestion = Number.isFinite(id)
        ? this.suggestionData.getById(id)
        : undefined;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
