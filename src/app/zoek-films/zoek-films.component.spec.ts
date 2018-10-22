import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import { ZoekFilmsComponent } from './zoek-films.component';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TmdbImagePipe} from '../tmdb-image.pipe';
import {RatingPipe} from '../rating.pipe';
import {NamesPipe} from '../names.pipe';
import {FilmDetailsComponent} from '../film-details/film-details.component';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {TheMovieDBService} from '../the-movie-db.service';
import { FilmZoekResultaat } from '../model/film-zoek-resultaat';

describe('ZoekFilmsComponent', () => {
  let component: ZoekFilmsComponent;
  let fixture: ComponentFixture<ZoekFilmsComponent>;

  it('should create', () => {
    TestBed.configureTestingModule({
      declarations: [ ZoekFilmsComponent, TmdbImagePipe, RatingPipe, NamesPipe, FilmDetailsComponent],
      imports: [ FormsModule, RouterTestingModule, HttpClientTestingModule ],
      providers: [
        {provide: ActivatedRoute,
        useValue: { snapshot: {paramMap: convertToParamMap({}) }}},
        {provide: TheMovieDBService},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoekFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('search for movies',() => {
    let httpMock: HttpTestingController;
    TestBed.configureTestingModule({
      declarations: [ ZoekFilmsComponent, TmdbImagePipe, RatingPipe, NamesPipe, FilmDetailsComponent],
      imports: [ FormsModule, RouterTestingModule, HttpClientTestingModule ],
      providers: [
        {provide: ActivatedRoute,
          useValue: { snapshot: {paramMap: convertToParamMap({'zoekString':'shrek'}) }}},
        {provide: TheMovieDBService},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ZoekFilmsComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.get(HttpTestingController);
    fixture.detectChanges();

    // const expectedUrl = `$(TheMovieDBService.searchUrl)?api_key...`
    // const request = httpMock.expectOne(expectedURL);

    const url = 'https://api.themoviedb.org/3/search/movie?api_key=8cd7f76fdca92c3eba84cb1bca02cdea&query=shrek&page=1';
    const request = httpMock.expectOne(url);

    expect(request.request.method).toBe('GET');
    const data: any = require('../../assets/shrek-movies.json');
    request.flush(data);
    expect(component.selected).toBeFalsy();
  });

  it('search for id',() => {
    let httpMock: HttpTestingController;
    TestBed.configureTestingModule({
      declarations: [ ZoekFilmsComponent, TmdbImagePipe, RatingPipe, NamesPipe, FilmDetailsComponent],
      imports: [ FormsModule, RouterTestingModule, HttpClientTestingModule ],
      providers: [
        {provide: ActivatedRoute,
          useValue: { snapshot: {paramMap: convertToParamMap({'zoekString': 808}) }}},
        {provide: TheMovieDBService},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ZoekFilmsComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.get(HttpTestingController);
    fixture.detectChanges();

    // const expectedUrl = `$(TheMovieDBService.searchUrl)?api_key...`
    // const request = httpMock.expectOne(expectedURL);

    const url = 'https://api.themoviedb.org/3/movie/808?api_key=8cd7f76fdca92c3eba84cb1bca02cdea';
    const request = httpMock.expectOne(url);

    expect(request.request.method).toBe('GET');
    const data: any = require('../../assets/shrek-movies.json');
    request.flush(data);
    expect(component.selected).toBeTruthy();
    expect(component.movies.total_results).toBe(1);

  });
});
