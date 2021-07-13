import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { DisplayService } from './display.service';
import { Pokemon, PokemonResolved } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonResolverService implements Resolve<PokemonResolved> {

  constructor(private pokemonService: DisplayService) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<PokemonResolved> {
const id = Number(route.paramMap.get('id'));
if (isNaN(+id)) {
const message = `Product id was not a number: ${id}`;
console.error(message);
return of({ pokemon: null, error: message });
}

return this.pokemonService.getSinglePokemon(+id)
.pipe(
  map(pokemon => ({ pokemon: pokemon })),
  catchError(error => {
    const message = `Retrieval error: ${error}`;
    console.error(message);
    return of({ pokemon: null, error: message });
  })
);
}
}
