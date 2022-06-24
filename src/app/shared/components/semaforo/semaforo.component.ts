import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styles: []
})
export class SemaforoComponent {

  @Input() semaforoState: string = "red";

  constructor() {}

}
