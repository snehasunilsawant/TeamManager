import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})
export class PlayerlistComponent implements OnInit {
  playerlist: Array<object> = [];
  id;

  constructor(private _playerService: PlayerService, private _router: Router ) { }

  ngOnInit() {
    this.get_all_players();
  }

  get_all_players() {
    this._playerService.get_all_players()
    .then( playerlist => this.playerlist = playerlist)
    .catch( err => console.log('Client all get users ', err));
  }

  deletePlayer(id) {
    console.log(id);
    this._playerService.deletePlayer(id)
    .then( () => {console.log('i am back in component'); this.ngOnInit(); })
    .catch( err => console.log('Client all get users ', err));
  }

}
// this._router.navigate(['/']);