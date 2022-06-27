import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { LightBulbComponent } from "./light-bulb.component";

describe('HeaderGame Component', () => {
  let spectator: Spectator<LightBulbComponent>;
  const createComponent = createComponentFactory(LightBulbComponent);

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
