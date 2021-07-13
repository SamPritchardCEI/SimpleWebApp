import { Component, OnInit } from '@angular/core';
import { DisplayService } from './display.service';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.less']
})
export class PokemonEditComponent implements OnInit {

  constructor(private pokemonService: DisplayService) { }

  ngOnInit(): void {
  }

}
