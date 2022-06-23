import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/services/auth.guard';

const routes: Routes = [
  {
    path: 'game',
    loadChildren: () => import('./pages/game/game.module').then( m => m.GameModule ),
    canActivate: [ AuthGuard ]
  },{
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule )
  },{
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
