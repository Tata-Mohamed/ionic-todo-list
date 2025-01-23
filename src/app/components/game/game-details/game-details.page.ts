import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/services/gameService/game.service';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.page.html',
  styleUrls: ['./game-details.page.scss'],
})
export class GameDetailsPage implements OnInit {
  game: Game | undefined;
  games: Game[] = [];

  constructor(private route: ActivatedRoute ,private gameService: GameService, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.game = this.gameService.getGameById(id);
      console.log(this.game);
    }
  }

  deleteGame(gameId: string) {
    this.gameService.deleteGame(gameId);

    this.router.navigate(['/list-games']).then(() =>
      window.location.reload()
    );
  }
}
