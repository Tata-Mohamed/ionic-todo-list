import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRoutingModule } from './form-routing.module';

import { FormPage } from './form.page';
import { CreateGameModule } from '../game/create-game/create-game.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormRoutingModule,
    CreateGameModule
  ],
  declarations: [FormPage]
})
export class FormModule {}
