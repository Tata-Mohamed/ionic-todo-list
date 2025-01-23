import { Component } from '@angular/core';
import { Collection } from '../models/collection.model';
import { Router } from '@angular/router';
import { Game } from '../../game/models/game.model';
import { CollectionService } from 'src/app/services/collectionService/collection.service';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.page.html',
  styleUrls: ['./create-collection.page.scss'],
})
export class CreateCollectionPage {

  ngOnInit() {
  }

  collections: Collection[] = [];
  newCollectionName: string = '';
  newCollectionDescription: string = '';
  newCollectionImage: File | null = null;
  newCollectionGames: Game[] = [];
  collectionCreatedAt: Date = new Date();

  constructor(private router: Router, private collectionService: CollectionService) {}

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
        image: this.newCollectionImage 
          ? URL.createObjectURL(this.newCollectionImage)
          : '',
        games: this.newCollectionGames,
        createdAt: new Date(),
      };

      this.collectionService.addCollection(newCollection); 
      this.router.navigate(['/list-collection']);
    }
  }
}
