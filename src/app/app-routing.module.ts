import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListCollectionPage } from './components/collection/list-collection/list-collection.page';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'list-collection',
    component: ListCollectionPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'create_collection',
    canActivate: [AuthGuard],
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
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/collection/create-collection/create-collection.module').then( m => m.CreateCollectionPageModule)
  },
  {
    path: 'list-collection',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/collection/list-collection/list-collection.module').then( m => m.ListCollectionPageModule)
  },
  {
    path: 'list-games',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/game/list-game/list-game.module').then( m => m.ListGamesPageModule)
  },
  {
    path: 'form',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/form/form.module').then( m => m.FormModule)
  },
  {
    path: 'game-details/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/game/game-details/game-details.module').then( m => m.GameDetailsPageModule)
  },
  {
    path: 'statistics',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/statistics/statistics.module').then( m => m.StatisticsPageModule)
  },
  {
    path: 'collection-details',
    loadChildren: () => import('./components/collection/collection-details/collection-details.module').then( m => m.CollectionDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
