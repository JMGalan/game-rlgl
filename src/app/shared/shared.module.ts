import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonLoginComponent } from './components/button-login/button-login.component';
import { InputLoginComponent } from './components/input-login/input-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HighScoreComponent } from './components/high-score/high-score.component';

@NgModule({
  declarations: [
    InputLoginComponent,
    ButtonLoginComponent,
    HighScoreComponent
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
    HighScoreComponent
  ]
})
export class SharedModule { }
