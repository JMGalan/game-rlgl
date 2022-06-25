import { Component, Input } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {

  @Input() txtLabel: string = "";
  @Input() mode: string = "";

  get score() {
    return (this.mode == 'highscore') ? this.authServ.getHighScore() : this.authServ.getScore();
  }

  constructor( private authServ: AuthService ) {}
}
