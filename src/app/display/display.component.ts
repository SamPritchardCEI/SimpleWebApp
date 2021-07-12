import { Component, OnInit } from '@angular/core';
import { DisplayService } from './display.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.less']
})
export class DisplayComponent implements OnInit {

  errorMessage = ''; //holder for the error message
  pokemonList: Pokemon[] = []; //the list that will hold the read in pokemon

  constructor(private pokemonService: DisplayService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe({ //subscribe to the observable
      next: pokemon => {
        this.pokemonList = pokemon; //get the next pokemon
      },
      error: err => this.errorMessage = err
    });
  }

}
