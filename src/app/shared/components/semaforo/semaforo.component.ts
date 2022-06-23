import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styles: []
})
export class SemaforoComponent {

  colorBulb: string = 'green';

  @Input() userName = '';
  @Output() onLogout : EventEmitter<boolean> = new EventEmitter();

  constructor() {}

}
