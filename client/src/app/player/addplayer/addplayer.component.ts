import { Component, OnInit } from '@angular/core';
import { Player } from './../player';
import { PlayerService } from './../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {
  player: Player;

  constructor(private _playerService: PlayerService, private _router: Router ) { }

  ngOnInit() {
    this.player = new Player;
  }

  addPlayer() {
    this._playerService.addPlayer(this.player)
    .then( () => {this._router.navigate(['/players/list']); })
    .catch( err => console.log('Client all get users ', err));
  }

}
