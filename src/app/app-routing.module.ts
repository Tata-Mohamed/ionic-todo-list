import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListCollectionPage } from './components/collection/list-collection/list-collection.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'list-collection',
    component: ListCollectionPage
  },
  {
    path: 'create_collection',
    loadChildren: () => import('./components/collection/create-collection/create-collection.module').then( m => m.CreateCollectionPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'create-collection',
    loadChildren: () => import('./components/collection/create-collection/create-collection.module').then( m => m.CreateCollectionPageModule)
  },
  {
    path: 'list-collection',
    loadChildren: () => import('./components/collection/list-collection/list-collection.module').then( m => m.ListCollectionPageModule)
  },
  {
    path: 'list-games',
    loadChildren: () => import('./components/game/list-game/list-game.module').then( m => m.ListGamesPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./components/form/form.module').then( m => m.FormModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
