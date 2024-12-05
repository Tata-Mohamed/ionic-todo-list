import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCollectionPageRoutingModule } from './list-collection-routing.module';

import { ListCollectionPage } from './list-collection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCollectionPageRoutingModule
  ],
  declarations: [ListCollectionPage]
})
export class ListCollectionPageModule {}
