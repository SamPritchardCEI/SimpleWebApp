import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisplayService } from './display.service';
import { Pokemon, PokemonResolved } from './pokemon';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.less']
})
export class PokemonEditComponent implements OnInit {

  pageTitle = 'Pokemon Detail';
  pokemon!: Pokemon;
  errorMessage: string = '';

  constructor(private pokemonService: DisplayService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // //getting the data needed to display the pokemon
    // try{
    // const id = +this.route.snapshot.paramMap.get('id'); //get the id
    // this.getPokemon(id); //pass the id in to the function
    // }
    // catch(exception ex){}

     const resolvedData: PokemonResolved =
       this.route.snapshot.data['resolvedData'];
     this.errorMessage = resolvedData.error;
      this.onPokemonRetrieved(resolvedData.pokemon);

  }

  //get the pokemon passed in
  getPokemon(id: number) {
    this.pokemonService.getSinglePokemon(id).subscribe({ //subscribe to the observable
      next: pokemon => this.onPokemonRetrieved(pokemon), //assign the internal pokemon to the one we got
      error: err => this.errorMessage = err
    });
  }

  //when we get the pokemon we are looking for
  onPokemonRetrieved(pokemon: Pokemon): void {
    this.pokemon = pokemon; //set the pokemon

    //if the pokemon is set, add the pokemon name to the title.
    if (this.pokemon) {
      this.pageTitle = `Pokemon Detail: ${this.pokemon.name}`;
    } else {
      this.pageTitle = 'No product found'; //if not error
    }
  }

}
