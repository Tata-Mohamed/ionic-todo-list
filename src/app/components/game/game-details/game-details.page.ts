import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/services/gameService/game.service';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.page.html',
  styleUrls: ['./game-details.page.scss'],
})
export class GameDetailsPage implements OnInit {
  game: Game | undefined;

  constructor(private route: ActivatedRoute ,private gameService: GameService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.game = this.gameService.getGameById(id);
      console.log(this.game);
    }
  }

}
