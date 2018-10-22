import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TheMovieDBService} from '../the-movie-db.service';
import { FilmZoekResultaat } from '../model/film-zoek-resultaat';
import { Movie } from 'src/app/model/movie';


@Component({
  selector: 'app-zoek-films',
  templateUrl: './zoek-films.component.html',
  styleUrls: ['./zoek-films.component.css'],
  providers: [ TheMovieDBService ]
})
export class ZoekFilmsComponent {
  movies: FilmZoekResultaat = new FilmZoekResultaat(1, 0, 0, []);
  showNumbers = false;
  showPics = false;
  zoekString: string;
  selected: Movie;

  constructor(
    private theMovieDBService: TheMovieDBService,
    private route?: ActivatedRoute) { }

zoek(page = 1) {
  this.theMovieDBService.getData(this.zoekString, page).subscribe(result => {
    this.movies = result;
  });
}
 ngOnInit(): void {
   const map = this.route.snapshot.paramMap;
   if (map.has('zoekString')){
     const zoekString = map.get('zoekString');
     if (isNaN(Number(zoekString))) {
       this.zoekString = zoekString;
       this.zoek();
     }else{
        this.theMovieDBService.getDetail(Number(zoekString)).subscribe(result => {
        this.movies = new FilmZoekResultaat (1,1,1,[result]);
        this.selected = result;
        this.zoekString = result.title;
        });
      }
    }
  }

  // scoreCategorie(score: number) {
  //   if (score >= 8) {
  //     return 'great';
  //   } else if (score >= 7) {
  //     return 'good';
  //   } else if (score >= 5.5) {
  //     return 'ok';
  //   } else {
  //     return 'bad';
  //   }
  // }
  //
  // score(score: number) {
  //   if (this.showNumbers) {
  //     return score;
  //   } else {
  //     return this.scoreCategorie(score);
  //   }
  // }
}
