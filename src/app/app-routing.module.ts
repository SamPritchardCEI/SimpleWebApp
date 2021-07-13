import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { DetailsComponent } from './details/details.component';
import { DisplayComponent } from './display/display.component';
import { PokemonEditComponent } from './display/pokemon-edit.component';

const routes: Routes = [
  { path: 'bio', component: BioComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'display/:id', component: PokemonEditComponent },
  { path: '', redirectTo: 'bio', pathMatch: 'full' },
  { path: '**', component: BioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
