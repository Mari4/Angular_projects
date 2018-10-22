import { Injectable } from '@angular/core';
import { FilmZoekResultaat } from './model/film-zoek-resultaat';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { Movie } from 'src/app/model/movie';

@Injectable()
export class TheMovieDBService {
  mock = false;  // snelle manier om straks lokaal door te kunnen werken
  localUrl = 'http://localhost:4200/assets/shrek-movies.json';
  localIdUrl = 'http://localhost:4200/assets/puss_in_boots.json';
  zoekUrl = 'https://api.themoviedb.org/3/search/movie';
  detailUrl  = 'https://api.themoviedb.org/3/movie/'
  apiKey = '8cd7f76fdca92c3eba84cb1bca02cdea';

  constructor(private httpClient: HttpClient) { }

  getData(zoekString: string, page: number): Observable<FilmZoekResultaat> {
    let url = `${this.zoekUrl}?api_key=${this.apiKey}&query=${zoekString}&page=${page}`;
    return this.httpClient.get<FilmZoekResultaat>(url);
  }

  getDetail(id: number): Observable<Movie> {
    let url = `${this.detailUrl}${id}?api_key=${this.apiKey}`;
    return this.httpClient.get<Movie>(url);
  }
}
