import { Component } from '@angular/core';
import { Collection } from '../models/create-collection.model';
import { Router } from '@angular/router';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.page.html',
  styleUrls: ['./create-collection.page.scss'],
})
export class CreateCollectionPage {

  selectedForm: 'collection' | 'game' = 'collection';

  collections: Collection[] = [];
  newCollectionName: string = '';
  newCollectionDescription: string = '';
  newCollectionImage: File | null = null;
  newCollectionGames: Game[] = [];
  collectionCreatedAt: Date = new Date();
  collectionUpdatedAt: Date = new Date();

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
      this.newCollectionImage = file;
    }
  }

  addCollection() {
    if (this.newCollectionName.trim().length > 0) {
      const newCollection: Collection = {
        id: Date.now().toString(),
        name: this.newCollectionName.trim(),
        description: this.newCollectionDescription.trim() || undefined,
        image: this.newCollectionImage ? URL.createObjectURL(this.newCollectionImage) : undefined,
        games: this.newCollectionGames,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const existingCollections = JSON.parse(localStorage.getItem('collections') || '[]');
      existingCollections.push(newCollection);
      localStorage.setItem('collections', JSON.stringify(existingCollections));

      this.newCollectionName = '';
      this.newCollectionDescription = '';
      this.newCollectionImage = null;
      this.newCollectionGames = [];

      this.router.navigate(['/list-collection']);
    }
  }

  addGame() {
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
