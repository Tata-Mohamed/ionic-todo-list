import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.page.html',
  styleUrls: ['./list-games.page.scss'],
})
export class ListGamesPage {

  listJeux: Game[] = [];
  
  constructor() {
    this.listJeux = JSON.parse(localStorage.getItem('games') || '[]');
  }

}
