import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiMoviesUrl = 'api/movies';
  constructor(
    private loggingService: LoggingService,
    private http: HttpClient
  ) {}

  getMovies(): Observable<Movie[]> {
    this.loggingService.add('MovieService: all movies listed! ');
    return this.http.get<Movie[]>(this.apiMoviesUrl);
  }

  getMovie(id: number): Observable<Movie | null | undefined> {
    this.loggingService.add('MovieService: get detail by movie id = ' + id);
    return this.http.get<Movie>(this.apiMoviesUrl + '/' + id);
  }

  update(movie: Movie | null | undefined): Observable<any> {
    this.loggingService.add('MovieService: ' + movie!.name + ' updated! ');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.put(this.apiMoviesUrl, movie, httpOptions);
  }

  add(movie: Movie): Observable<Movie> {
    this.loggingService.add('MovieService: ' + movie!.name + ' added! ');
    return this.http.post<Movie>(this.apiMoviesUrl, movie);
  }
}
