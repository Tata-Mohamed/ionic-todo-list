import { Component } from '@angular/core';
import { Collection } from '../models/collection.model';
import { Router } from '@angular/router';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.page.html',
  styleUrls: ['./create-collection.page.scss'],
})
export class CreateCollectionPage {

  ngOnInit() {
    this.loadCollections();
  }

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
          nom: this.newGameName.trim(),
          console: this.newGamePlatform,
          collection: this.newGameGenre,
          dateDeSortie: new Date(),
          coverImage: this.newGameCoverImage ? URL.createObjectURL(this.newGameCoverImage) : undefined,
          description: this.newGameDescription,
          dateDeCreation: new Date(),
        };
  
        const existingGames = JSON.parse(localStorage.getItem('games') || '[]');
        existingGames.push(newGame);
        localStorage.setItem('games', JSON.stringify(existingGames));
  
        this.newGameName = '';
        this.newGameDescription = '';
        this.newGameCoverImage = null;
  
        this.router.navigate(['/list-games']);
      }
    }

    loadCollections() {
      const existingCollections = JSON.parse(localStorage.getItem('collections') || '[]');
      this.collections = existingCollections;
    }
}
