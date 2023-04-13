import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private logingService: LoggingService) {}

  getMovies(): Observable<Movie[]> {
    this.logingService.add('MovieService: movies listed! ');
    return of(Movies);
  }
}
