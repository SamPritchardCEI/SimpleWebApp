import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  private pokemonUrl = 'api/pokemon'; //NEED TO FIGURE OUT WHY NOT WORKING CANNOT FIND

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

  //get a single pokemon based on the id
  getSinglePokemon(id: number): Observable<Pokemon> {
    //if the id is 0, we are adding a new one
    if (id === 0) {
      return of(this.initializePokemon()); //initilize the new pokemon
    }
    const url = `${this.pokemonUrl}/${id}`; //use the id in the url we get from the pokemon that was selected
    return this.http.get<Pokemon>(url)
      .pipe(
        tap(data => console.log('getPokemon: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  //add a new pokemon
  createProduct(pokemon: Pokemon): Observable<Pokemon> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    pokemon.id = 0;
    return this.http.post<Pokemon>(this.pokemonUrl, pokemon, { headers }) //returns the new pokemon that we add
      .pipe(
        tap(data => console.log('createProduct: ' + JSON.stringify(data))), //log that it succeeded
        catchError(this.handleError)
      );
  }

  //delete a pokmon from the list
  deleteProduct(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.pokemonUrl}/${id}`; //use the id of the pokemon we are deleting
    return this.http.delete<Pokemon>(url, { headers })
      .pipe(
        tap(data => console.log('deleteProduct: ' + id)), //log the deleted pokemon
        catchError(this.handleError)
      );
  }

  //update an existing pokemon
  updateProduct(pokemon: Pokemon): Observable<Pokemon> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.pokemonUrl}/${pokemon.id}`;
    return this.http.put<Pokemon>(url, pokemon, { headers })
      .pipe(
        tap(() => console.log('updateProduct: ' + pokemon.id)),
        // Return the product on an update
        map(() => pokemon),
        catchError(this.handleError)
      );
  }


  //handle any errors that may occur (for test environment)
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
      id: 0,
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
