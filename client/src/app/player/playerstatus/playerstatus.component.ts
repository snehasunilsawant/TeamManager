import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../player.service';

@Component({
  selector: 'app-playerstatus',
  templateUrl: './playerstatus.component.html',
  styleUrls: ['./playerstatus.component.css']
})
export class PlayerstatusComponent implements OnInit {
  playerlist: Array<object> = [];
  str;
  action;

  constructor(private _playerService: PlayerService) { }

  ngOnInit() {
    this.get_all_players();
    }

  get_all_players() {
    this._playerService.get_all_players()
    .then( playerlist => this.playerlist = playerlist)
    .catch( err => console.log('Client all get users ', err));
  }

  changeColor(str, player) {
    console.log(str);
    if ( str === 1) {
      player.action = 'Playing';
    }
    if ( str === 2) {
      player.action = 'NotPlaying';
    }
    if ( str === 3) {
      player.action = 'Undecided';
    }

  }
}
