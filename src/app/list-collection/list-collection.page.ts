import { Component } from '@angular/core';
import { Collection } from '../models/create-collection.model';

@Component({
  selector: 'app-list-collection',
  templateUrl: './list-collection.page.html',
  styleUrls: ['./list-collection.page.scss'],
})
export class ListCollectionPage {
  collections: Collection[] = [];

  constructor() {
    this.collections = JSON.parse(localStorage.getItem('collections') || '[]');
  }
}
