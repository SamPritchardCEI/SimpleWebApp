import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';
import { DetailsComponent } from './details/details.component';
import { DisplayComponent } from './display/display.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PokemonData } from './display/pokemon-data';

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    DetailsComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(PokemonData), //import the need for the pokemon data
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
