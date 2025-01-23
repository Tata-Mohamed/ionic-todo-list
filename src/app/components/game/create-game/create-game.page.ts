import { Component } from '@angular/core';
import { Game } from '../models/game.model';
import { Router } from '@angular/router';
import { Collection } from '../../collection/models/collection.model';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { GameService } from 'src/app/services/gameService/game.service';
import { CollectionService } from 'src/app/services/collectionService/collection.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.page.html',
  styleUrls: ['./create-game.page.scss'],
})
export class CreateGamePage {

  ngOnInit() {
    this.loadCollections();
  }

  collections: Collection[] = [];
  newCollectionGames: Game[] = [];
  games: Game[] = [];
  newGameName: string = '';
  newGameDescription: string = '';
  newGameGenre: string = '';
  newGameCoverImage: string | undefined;
  newGamePlatform: string = '';
  newGameReleaseYear: Date = new Date();
  newGameAddedAt: Date = new Date();
  newGameNbHeures?: number;

  constructor(private router: Router, private gameService: GameService, private collectionService: CollectionService) {
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.newGameCoverImage = file;
    }
  }

  loadCollections() {
    this.collections = this.collectionService.getCollections();
  }

  addGame() {
      if (this.newGameName.trim().length > 0) {
        const newGame: Game = {
          id: Date.now().toString(),
          nom: this.newGameName.trim(),
          console: this.newGamePlatform,
          collection: this.newGameGenre,
          dateDeSortie: new Date(),
          coverImage: this.newGameCoverImage ?? undefined,
          description: this.newGameDescription,
          dateDeCreation: new Date(),
          heuresDeJeu: this.newGameNbHeures || 0,
        };

        this.gameService.addGame(newGame); 
        this.router.navigate(['/list-games']);
      }
    }

    async takePhoto(): Promise<any>
    {
      try
      {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.DataUrl,
          source: CameraSource.Camera,
        });

        this.newGameCoverImage = image.dataUrl;

        return this.newGameCoverImage;
      } catch (error)
      {
        console.error('Camera issue:', error);
      }
    }
  }
