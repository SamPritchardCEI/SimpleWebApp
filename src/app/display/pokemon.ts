/* Defines the pokemon entity */
export interface Pokemon {
  name: string;
  typeOne: string;
  typeTwo: string;
  ability: string;
  item: string;
  level: number;
  moveOne: string;
  moveTwo: string;
  moveThree: string;
  moveFour: string;

}

export interface PokemonResolved {
  pokemon: Pokemon;
  error?: any;
}
