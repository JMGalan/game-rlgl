import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-game',
  templateUrl: './header-game.component.html',
  styleUrls: ['./header-game.component.css']
})
export class HeaderGameComponent {

  @Input() userName = '';
  @Output() onLogout : EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  emitLogout() {
    this.onLogout.emit(true);
  }

}
