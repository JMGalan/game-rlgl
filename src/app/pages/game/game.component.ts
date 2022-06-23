import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styles: []
})
export class GameComponent implements OnDestroy {

  userName: string = '';
  highScore: number = 0;
  score: number = 0;

  authStateSubs!: Subscription;
  getCollectionSubs!: Subscription;

  constructor(
    public auth: AngularFireAuth,
    private authServ: AuthService,
    private router: Router
  ) {
    this.authStateSubs = this.auth.authState.subscribe( fuser => {
      if (fuser && fuser.email) {
        this.userName = fuser?.email?.split('@')[0];

        this.getCollectionSubs = this.authServ.getCollection(fuser.uid)
        .subscribe( (doc) => {
          this.highScore = doc[0].highscore;
          this.score = doc[0].score;
        })
      }
    });
  }

  logout() {
    this.authServ.logout().then( ()=> {
      this.router.navigateByUrl('');
    });
  }

  ngOnDestroy(): void {
    this.authStateSubs.unsubscribe();
    this.getCollectionSubs.unsubscribe();
  }
}
