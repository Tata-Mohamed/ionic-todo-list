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
  collections: Collection[] = [];
  newCollectionName: string = '';
  newCollectionDescription: string = '';
  newCollectionImage: File | null = null;
  newCollectionGames: Game[] = [];
  collectionCreatedAt: Date = new Date();
  collectionUpdatedAt: Date = new Date();

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
}
