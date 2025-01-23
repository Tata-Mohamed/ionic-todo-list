import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from 'src/app/services/collectionService/collection.service';
import { GameService } from 'src/app/services/gameService/game.service';
import { Collection } from '../models/collection.model';
import { Game } from '../../game/models/game.model';

@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.page.html',
  styleUrls: ['./collection-details.page.scss'],
})
export class CollectionDetailsPage implements OnInit {
  collection: Collection | undefined;
  games: Game[] = [];

  constructor(
    private route: ActivatedRoute,
    private collectionService: CollectionService,
    private gameService: GameService
  ) {}

  ngOnInit() {
    const collectionId = this.route.snapshot.paramMap.get('id');
    if (collectionId) {
      this.collection = this.collectionService.getCollectionById(collectionId);
      this.games = this.gameService.getGamesByCollectionId(collectionId);
    }
  }
}
