import { Injectable } from '@angular/core';
import { Game } from '../../components/game/models/game.model';  // Assurez-vous que ce modèle existe dans votre projet

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor() {}

  getGames(): Game[] {
    const gamesData = localStorage.getItem('games');
    if (gamesData) {
      return JSON.parse(gamesData);
    }
    return [];
  }

  getTopGames(): Game[] {
    const games = this.getGames();
    return games
      .filter(game => game.heuresDeJeu !== undefined)  // Filtrer les jeux sans heuresDeJeu
      .sort((a, b) => (b.heuresDeJeu || 0)  - (a.heuresDeJeu || 0))
      .slice(0, 3);
  }

  getLeastPlayedGames(): Game[] {
    const games = this.getGames();
    return games
      .sort((a, b) => (a.heuresDeJeu || 0)  - (b.heuresDeJeu || 0))
      .slice(0, 3);
  }
}
