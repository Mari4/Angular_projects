import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TheMovieDBService} from '../the-movie-db.service';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css'],
  providers: [ TheMovieDBService ]
})
export class FilmDetailsComponent implements OnInit {

  @Input() movie: Movie;
  @Output() close = new EventEmitter();

  constructor(private theMovieDBService: TheMovieDBService) { }

  ngOnInit() {
    this.theMovieDBService.getDetail(this.movie.id).subscribe(result => {
      this.movie = result
    });
  }
 closeMe() {
   this.close.emit();
 }
}
