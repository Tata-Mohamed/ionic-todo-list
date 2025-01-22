import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRoutingModule } from './form-routing.module';

import { FormPage } from './form.page';
import { CreateGameModule } from '../game/create-game/create-game.module';
import { CreateCollectionPageModule } from "../collection/create-collection/create-collection.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormRoutingModule,
    CreateGameModule,
    CreateCollectionPageModule
],
  declarations: [FormPage]
})
export class FormModule {}
