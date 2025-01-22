import { Injectable } from '@angular/core';
import { Game } from 'src/app/components/game/models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games: Game[] = []

  constructor() {
    this.games = this.getGames();
  }

  public getGames() {
    return JSON.parse(localStorage.getItem('games') || '[]');
  }

  public getGameById(id: string): Game | undefined {
    return this.games.find((game) => game.id === id);
  }
}
