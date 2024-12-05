import { Component } from '@angular/core';
import { Game } from '../models/game.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.page.html',
  styleUrls: ['./create-game.page.scss'],
})
export class CreateGamePage {
  games: Game[] = [];
  newGameName: string = '';
  newGameDescription: string = '';
  newGameGenre: string = '';
  newGameCoverImage: File | null = null;
  newGamePlatform: string = '';
  newGameReleaseYear: Date = new Date();
  newGameAddedAt: Date = new Date();

  constructor(private router: Router) {}

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.newGameCoverImage = file;
    }
  }

  addCollection() {
    if (this.newGameName.trim().length > 0) {
      const newGame: Game = {
        id: Date.now().toString(),
        title: this.newGameName.trim(),
        platform: this.newGamePlatform,
        genre: this.newGameGenre,
        releaseYear: new Date(),
        coverImage: this.newGameCoverImage ? URL.createObjectURL(this.newGameCoverImage) : undefined,
        description: this.newGameDescription,
        addedAt: new Date(),
      };

      const existingCollections = JSON.parse(localStorage.getItem('collections') || '[]');
      existingCollections.push(newGame);
      localStorage.setItem('collections', JSON.stringify(existingCollections));

      this.newGameName = '';
      this.newGameDescription = '';
      this.newGameCoverImage = null;

      this.router.navigate(['/list-collection']);
    }
  }

}
