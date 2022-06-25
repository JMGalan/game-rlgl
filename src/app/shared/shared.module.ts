import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonLoginComponent } from './components/button-login/button-login.component';
import { InputLoginComponent } from './components/input-login/input-login.component';
import { ScoreComponent } from './components/score/score.component';
import { LightBulbComponent } from './components/light-bulb/light-bulb.component';
import { ButtonGameComponent } from './components/button-game/button-game.component';

@NgModule({
  declarations: [
    InputLoginComponent,
    ButtonLoginComponent,
    ScoreComponent,
    LightBulbComponent,
    ButtonGameComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputLoginComponent,
    ButtonLoginComponent,
    ScoreComponent,
    LightBulbComponent,
    ButtonGameComponent
  ]
})
export class SharedModule {}
