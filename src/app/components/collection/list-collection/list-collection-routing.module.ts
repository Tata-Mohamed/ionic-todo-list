import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCollectionPage } from './list-collection.page';
import { CollectionDetailsPage } from '../collection-details/collection-details.page';

const routes: Routes = [
  {
    path: '',
    component: ListCollectionPage
  },
  {
    path: 'collection-details/:id',
    component: CollectionDetailsPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCollectionPageRoutingModule {}
