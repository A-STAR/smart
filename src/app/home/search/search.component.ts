import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Subscription } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'smrt-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  private searchForm: FormGroup;
  private subscription = new Subscription();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.initSearchForm();

    const querySubscription = this.searchForm
      .get('query')
      .valueChanges
      .pipe(
        map((query: string): string => query.trim()),
        filter((query: string): boolean => Boolean(query.length)),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((query: string) => this.searchService.query = query);

    const engineSubscription = this.searchForm
      .get('engine')
      .valueChanges
      .subscribe((engine: string) => {
        this.searchService.engine = engine;

        this.router.navigate([engine]);
      });

    this.subscription
      .add(querySubscription)
      .add(engineSubscription);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initSearchForm() {
    const { query, engine } = this.searchService;

    this.searchForm = this.fb.group({ query, engine });

    if (engine) {
      this.router.navigate([engine]);
    }
  }

}
