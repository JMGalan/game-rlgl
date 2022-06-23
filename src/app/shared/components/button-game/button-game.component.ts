import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-game',
  templateUrl: './button-game.component.html',
  styles: []
})
export class ButtonGameComponent {

  @Input() modeButton: string = 'left';
  @Output() onClick : EventEmitter<boolean> = new EventEmitter();

  get textButton():string {
    return this.modeButton.toUpperCase();
  }

  constructor() {}

}
