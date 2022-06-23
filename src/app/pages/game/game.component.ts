import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styles: []
})
export class GameComponent {

  userName: string = '';

  constructor(
    public auth: AngularFireAuth,
    private router: Router
  ) {
    this.auth.authState.subscribe( fuser => {
      if (fuser && fuser.email) {
        this.userName = fuser?.email?.split('#')[0];
      }
    });
  }

}
