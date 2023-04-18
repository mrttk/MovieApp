import { Component, Input } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent {
  @Input() movie: Movie | null | undefined;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private localtion: Location
  ) {}

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService
      .getMovie(id as unknown as number)
      .subscribe((movie) => (this.movie = movie));
  }

  save(): void {
    this.movieService.update(this.movie).subscribe(() => {
      this.localtion.back();
    });
  }
}
