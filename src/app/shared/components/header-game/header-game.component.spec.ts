import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { HeaderGameComponent } from "./header-game.component";

describe('HeaderGame Component', () => {
  let spectator: Spectator<HeaderGameComponent>;
  const createComponent = createComponentFactory(HeaderGameComponent);

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  it('function emitLogout', () => {
    let output;
    spectator.output('onLogout').subscribe(result => (output = result));
    spectator.component.emitLogout();
    expect(output).toEqual(true);
  });
});
