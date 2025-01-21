import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListGamesPage } from './list-game.page';

const routes: Routes = [
  {
    path: '',
    component: ListGamesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListGamesPageRoutingModule {}
