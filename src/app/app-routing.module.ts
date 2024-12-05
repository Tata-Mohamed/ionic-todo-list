import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListCollectionPage } from './list-collection/list-collection.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'list-collection',
    component: ListCollectionPage
  },
  {
    path: 'create_collection',
    loadChildren: () => import('./create-collection/create-collection.module').then( m => m.CreateCollectionPageModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then( m => m.TodoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'create-game',
    loadChildren: () => import('./create-game/create-game.module').then( m => m.CreateGamePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'create-collection',
    loadChildren: () => import('./create-collection/create-collection.module').then( m => m.CreateCollectionPageModule)
  },
  {
    path: 'list-collection',
    loadChildren: () => import('./list-collection/list-collection.module').then( m => m.ListCollectionPageModule)
  },
  {
    path: 'create-game',
    loadChildren: () => import('./create-game/create-game.module').then( m => m.CreateGamePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
