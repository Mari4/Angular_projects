  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ZoekFilmsComponent } from './zoek-films/zoek-films.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { RatingPipe } from './rating.pipe';
import { TmdbImagePipe } from './tmdb-image.pipe';
import { NamesPipe } from './names.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ZoekFilmsComponent,
    FilmDetailsComponent,
    DashboardComponent,
    PageNotFoundComponent,
    RatingPipe,
    TmdbImagePipe,
    NamesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot ([
      {
        path:'',
        component: DashboardComponent
      },
      {
        path: 'movies',
        component: ZoekFilmsComponent
      },
      {
        path: 'movies/:zoekString',
        component: ZoekFilmsComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
