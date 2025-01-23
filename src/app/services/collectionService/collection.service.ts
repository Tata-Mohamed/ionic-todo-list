import { Injectable } from '@angular/core';
import { Collection } from 'src/app/components/collection/models/collection.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor() { }

  public getCollections() {
    return JSON.parse(localStorage.getItem('collections') || '[]');
  }

  public addCollection(collection: Collection): void {
    const collections = this.getCollections();
    collections.push(collection);
    localStorage.setItem('collections', JSON.stringify(collections));
  }

  getCollectionById(id: string): Collection | undefined {
    const collections = this.getCollections();
    return collections.find((collection: Collection) => collection.id === id);
  }

  public deleteCollection(collectionId: string): void {
    const collections = this.getCollections();
    const updatedCollections = collections.filter(
      (collection: Collection) => collection.id !== collectionId
    );
    localStorage.setItem('collections', JSON.stringify(updatedCollections));
  }
}
