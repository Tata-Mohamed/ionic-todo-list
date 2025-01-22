import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor() { }

  public getCollections() {
    return JSON.parse(localStorage.getItem('collections') || '[]');
  }
}
