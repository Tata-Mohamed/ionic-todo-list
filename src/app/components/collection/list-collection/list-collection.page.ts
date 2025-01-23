import { Component } from '@angular/core';
import { Collection } from '../models/collection.model';
import { CollectionService } from 'src/app/services/collectionService/collection.service';

@Component({
  selector: 'app-list-collection',
  templateUrl: './list-collection.page.html',
  styleUrls: ['./list-collection.page.scss'],
})
export class ListCollectionPage {
  collections: Collection[] = [];

  constructor(private collectionService: CollectionService) {
    this.collections = this.collectionService.getCollections();
  }

  deleteCollection(collectionId: string){
    this.collectionService.deleteCollection(collectionId);
    this.refreshCollections();
  }

  private refreshCollections() {
    this.collections = this.collectionService.getCollections();
  }
}
