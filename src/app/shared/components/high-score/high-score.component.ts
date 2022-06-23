import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-high-score',
  templateUrl: './high-score.component.html',
  styles: []
})
export class HighScoreComponent {

  highScore: Number = 0;

  constructor(
    private authServ: AuthService
  ) {
    this.highScore = authServ.getHighScore();
  }

}
