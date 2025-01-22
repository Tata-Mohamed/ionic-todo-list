import { Component } from '@angular/core';
import { Game } from '../models/game.model';
import { GameService } from 'src/app/services/gameService/game.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-games',
  templateUrl: './list-game.page.html',
  styleUrls: ['./list-game.page.scss'],
})
export class ListGamesPage {

  games: Game[] = [];
  
  constructor(private router: Router, private gameService: GameService) {
    this.games = this.gameService.getGames()
  }

  goToDetails(id: string) {
    this.router.navigate(['/game-details', id]);
  }
}
