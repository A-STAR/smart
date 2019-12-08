import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _query$ = new BehaviorSubject<string>(undefined);
  private _engine$ = new BehaviorSubject<string>(undefined);
  query$: Observable<string> = this._query$.asObservable();
  engine$: Observable<string> = this._engine$.asObservable();

  get query(): string {
    return this._query$.value;
  }

  set query(value: string) {
    this._query$.next(value);
  }

  get engine(): string {
    return this._engine$.value;
  }

  set engine(value: string) {
    this._engine$.next(value);
  }

}
