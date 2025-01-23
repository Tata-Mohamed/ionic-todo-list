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

  public addGame(game: Game): void {
    const games = this.getGames();
    games.push(game);
    localStorage.setItem('games', JSON.stringify(games));
  }

  public deleteGame(gameId: string): void {
    const index = this.games.findIndex(g => g.id === gameId);
    
    if (index !== -1) {
      this.games.splice(index, 1);
      
      localStorage.setItem('games', JSON.stringify(this.games));
    }
  }

  getGamesByCollectionId(collectionId: string): Game[] {
    console.log(this.games.filter((game) => game.collection === collectionId));

    return this.games.filter((game) => game.collection === collectionId);
    
  }
}
