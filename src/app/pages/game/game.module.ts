import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GameRoutingModule } from './game-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { GameComponent } from './game.component';
import { HeaderGameComponent } from '../../shared/components/header-game/header-game.component';

@NgModule({
  declarations: [
    GameComponent,
    HeaderGameComponent
  ],
  imports: [
    GameRoutingModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class GameModule { }
