import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-light-bulb',
  templateUrl: './light-bulb.component.html',
  styleUrls: ['./light-bulb.component.css']
})
export class LightBulbComponent {

  @Input() lightState: string = "red";

  constructor() {}

}
