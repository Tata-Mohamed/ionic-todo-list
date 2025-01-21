import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCollectionPageRoutingModule } from './create-game-routing.module';

import { CreateGamePage } from './create-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCollectionPageRoutingModule
  ],
  declarations: [CreateGamePage],
  exports: [CreateGamePage]
})
export class CreateGameModule {}
