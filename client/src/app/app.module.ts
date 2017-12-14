import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PlayerService } from './player/player.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayerlistComponent } from './player/playerlist/playerlist.component';
import { PlayerstatusComponent } from './player/playerstatus/playerstatus.component';
import { AddplayerComponent } from './player/addplayer/addplayer.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerlistComponent,
    PlayerstatusComponent,
    AddplayerComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
