import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonLoginComponent } from './components/button-login/button-login.component';
import { InputLoginComponent } from './components/input-login/input-login.component';
import { HighScoreComponent } from './components/high-score/high-score.component';
import { ScoreComponent } from './components/score/score.component';

@NgModule({
  declarations: [
    InputLoginComponent,
    ButtonLoginComponent,
    HighScoreComponent,
    ScoreComponent
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
    HighScoreComponent,
    ScoreComponent
  ]
})
export class SharedModule { }
