import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { ButtonGameComponent } from "./button-game.component";

describe('ButtonGame Component', () => {
  let spectator: Spectator<ButtonGameComponent>;
  const createComponent = createComponentFactory(ButtonGameComponent);

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  it('getter textButton', () => {
    spectator.component.modeButton = "left";
    expect(spectator.component.textButton).toEqual("LEFT");
  });

  it('function clickButton', () => {
    let output;
    spectator.output('onBtnClick').subscribe(result => (output = result));
    spectator.component.clickButton('left');
    expect(output).toEqual('left');
  });
});