//import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Pokemon } from "./pokemon";

export class PokemonData {

  createDb() {
    const pokemon: Pokemon[] = [
      {
        name: 'Dracozolt',
        typeOne: 'Electric',
        typeTwo: 'Dragon',
        ability: 'Hustle',
        item: 'Life Orb',
        level: 100,
        moveOne: 'Bolt Break',
        moveTwo: 'Dragon Claw',
        moveThree: 'Arial Ace',
        moveFour: 'Earthquake'
      },
      {
        name: 'Passimian',
        typeOne: 'Fighting',
        typeTwo: 'None',
        ability: 'Defiant',
        item: 'Assault Vest',
        level: 50,
        moveOne: 'Close Combat',
        moveTwo: 'Iron Head',
        moveThree: 'Knock Off',
        moveFour: 'Feint'
      },
      {
        name: 'Whimsicott',
        typeOne: 'Grass',
        typeTwo: 'Fairy',
        ability: 'Prankster',
        item: 'Focus Sash',
        level: 1,
        moveOne: 'Energy Ball',
        moveTwo: 'Moonblast',
        moveThree: 'Tailwind',
        moveFour: 'Protect'
      },
      {
        name: 'Togekiss',
        typeOne: 'Fairy',
        typeTwo: 'Flying',
        ability: 'Super Luck',
        item: 'Babiri Berry',
        level: 100,
        moveOne: 'Dazzling Gleam',
        moveTwo: 'Flamethrower',
        moveThree: 'Follow Me',
        moveFour: 'Yawn'
      },
      {
        name: 'Darmanitan',
        typeOne: 'Ice',
        typeTwo: 'None',
        ability: 'Gorilla Tactics',
        item: 'Choice Scarf',
        level: 100,
        moveOne: 'Icicle Crash',
        moveTwo: 'Flare Blitz',
        moveThree: 'Earthquake',
        moveFour: 'Rock Slide'
      },
      {
        name: 'Duraludon',
        typeOne: 'Steel',
        typeTwo: 'Dragon',
        ability: 'Stalwart',
        item: 'Weakness Policy',
        level: 1,
        moveOne: 'Flash Cannon',
        moveTwo: 'Dark Pulse',
        moveThree: 'Draco Meteor',
        moveFour: 'Protect'
      }
    ];
    return { pokemon };
  }
}
