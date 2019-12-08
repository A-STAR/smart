import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SearchService } from 'src/app/search.service';

const engines: Map<string, string> = new Map([
  ['google', 'Google'],
  ['bing', 'Bing']
]);

@Component({
  selector: 'smrt-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  engine$: Observable<string> = this.searchService.engine$.pipe(
    map((engine: string): string => engines.get(engine))
  );

  query$: Observable<string> = this.searchService.query$;

  constructor(private searchService: SearchService) { }

}
