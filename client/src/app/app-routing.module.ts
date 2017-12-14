
import { PlayerlistComponent } from './player/playerlist/playerlist.component';
import { PlayerstatusComponent } from './player/playerstatus/playerstatus.component';
import { AddplayerComponent } from './player/addplayer/addplayer.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'players/list',
    component : PlayerlistComponent,
  },
  {
    path: 'players/status',
    component : PlayerstatusComponent,
    // children : ['1']
  },
  {
    path: 'players/addplayer',
    component : AddplayerComponent,
  },
  {
    path: 'players/status/1',
    pathMatch :  'full',
    component : PlayerstatusComponent,
  },
  {
    path: 'players/status/2',
    component : PlayerstatusComponent,
  },
  {
    path: 'players/status/3',
    component : PlayerstatusComponent,
  },
  {
    path: '**',
    redirectTo : '/players/list'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
