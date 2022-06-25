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
  @Input() score: number = 0;

  constructor( private authServ: AuthService ) {}
}
