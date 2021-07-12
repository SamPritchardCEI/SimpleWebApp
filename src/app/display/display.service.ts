import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  private pokemonUrl = 'api/pokemon';

  //constructor, make the http object
  constructor(private http: HttpClient) { }

  //get all the pokemon returns an observable of type pokemon
  getPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: { error: { message: any; }; status: any; body: { error: any; }; }) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  //set a default pokemon
  private initializePokemon(): Pokemon {
    // Return an initialized object
    return {
      name: '',
      typeOne: '',
      typeTwo: '',
      ability: '',
      item: '',
      level: 0,
      moveOne: '',
      moveTwo: '',
      moveThree: '',
      moveFour: ''

    };
  }

}
