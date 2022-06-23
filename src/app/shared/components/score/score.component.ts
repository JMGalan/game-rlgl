import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styles: []
})
export class ScoreComponent {

  score: Number = 0;

  constructor(
    private authServ: AuthService
  ) {
    this.score = authServ.getScore();
  }

}
