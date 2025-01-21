import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListGamesPageRoutingModule } from './list-game-routing.module';

import { ListGamesPage } from './list-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListGamesPageRoutingModule
  ],
  declarations: [ListGamesPage]
})
export class ListGamesPageModule {}
