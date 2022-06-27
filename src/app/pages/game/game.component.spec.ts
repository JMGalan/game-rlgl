import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from '../../core/services/auth.service';
import { GameComponent } from "./game.component";

describe('GameComponent Component', () => {
  let spectator: Spectator<GameComponent>;
  const createComponent = createComponentFactory({
    component: GameComponent,
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

  it('function getTimeToRed', () => {
    spectator.component.score = 0;
    let result = spectator.component.getTimeToRed();
    expect(result).toBeGreaterThan(8500);
  });

  it('function getRandom', () => {
    let result = spectator.component.getRandom(0, 10);
    expect(result).toBeGreaterThan(0);
  });
});