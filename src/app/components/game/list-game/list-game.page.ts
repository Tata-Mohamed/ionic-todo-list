import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-game.page.html',
  styleUrls: ['./list-game.page.scss'],
})
export class ListGamesPage {

  listJeux: Game[] = [];
  
  constructor() {
    this.listJeux = JSON.parse(localStorage.getItem('games') || '[]');
  }

}
