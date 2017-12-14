import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Player } from './player';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs';

@Injectable()
export class PlayerService {
  id;
  constructor(private _http: Http) { }

  get_all_players() {
    return this._http.get('/get_all_players').map(data => data.json()).toPromise();
  }

  deletePlayer(id) {
    return this._http.post('/deletePlayer', { id: id }).map(data => data.json()).toPromise();
    }

  addPlayer(player: Player) {
    return this._http.post('/addPlayer', player).map(data => data.json()).toPromise();
   }

}
