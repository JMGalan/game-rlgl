import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styles: []
})
export class GameComponent {

  userName: string = '';

  constructor(
    public auth: AngularFireAuth
  ) {
    this.auth.authState.subscribe( fuser => {
      if (fuser && fuser.email) {
        this.userName = fuser?.email?.split('#')[0];
      }
    });
  }

}
