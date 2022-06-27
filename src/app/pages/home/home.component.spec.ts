import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { RouterTestingModule } from '@angular/router/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../core/services/auth.service';

import { HomeComponent } from "./home.component";

const formGroup = new FormGroup({
  authForm: new FormControl('', [Validators.required]),
});

describe('HomeComponent Component', () => {
  let spectator: Spectator<HomeComponent>;
  const createComponent = createComponentFactory({
    component: HomeComponent,
    imports:[
      RouterTestingModule
    ],
    providers: [
      { provide: AuthService }
    ]
  });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  it('function ngOnInit', () => {
    spectator.component.ngOnInit();
  });
});