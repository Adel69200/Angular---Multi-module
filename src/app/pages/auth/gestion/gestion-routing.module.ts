import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateArticleComponent } from './create-article/create-article.component';
import { GestionComponent } from './gestion.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import { PlaylistComponent } from './playlist/playlist.component';

const routes: Routes = [
  {
    path: '',
    component: GestionComponent,
    children: [
      { path: 'playlists', component: PlaylistComponent },
      { path: 'playlist-details', component: PlaylistDetailsComponent},
      { path: 'create-playlist', component: CreateArticleComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
