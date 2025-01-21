import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor() { }

  // this.collections = JSON.parse(localStorage.getItem('collections') || '[]');
  public getCollections() {
    return JSON.parse(localStorage.getItem('collections') || '[]');
  }
}
