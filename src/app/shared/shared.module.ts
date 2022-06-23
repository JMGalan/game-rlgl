import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonLoginComponent } from './components/button-login/button-login.component';
import { InputLoginComponent } from './components/input-login/input-login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InputLoginComponent,
    ButtonLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputLoginComponent,
    ButtonLoginComponent
  ]
})
export class SharedModule { }
