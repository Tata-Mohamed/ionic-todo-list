import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCollectionPage } from './list-collection.page';

const routes: Routes = [
  {
    path: '',
    component: ListCollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCollectionPageRoutingModule {}
