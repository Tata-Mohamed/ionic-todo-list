import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListGamesPageRoutingModule } from './list-games-routing.module';

import { ListGamesPage } from './list-games.page';

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
