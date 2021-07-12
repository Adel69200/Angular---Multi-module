import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { GestionComponent } from './gestion.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';


@NgModule({
  declarations: [
    GestionComponent,
    PlaylistComponent,
    CreateArticleComponent,
    PlaylistDetailsComponent
  ],
  imports: [
    CommonModule,
    GestionRoutingModule
  ]
})
export class GestionModule { }
