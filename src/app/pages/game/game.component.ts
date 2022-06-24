import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AuthService } from '../../core/services/auth.service';
import { getHtmlTagDefinition } from '@angular/compiler';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styles: []
})
export class GameComponent implements OnInit, OnDestroy {

  userName: string = '';
  highScore: number = 0;
  score: number = 0;

  semaforoState: string = 'red';


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

        this.getCollectionSubs = this.authServ.getCollection(fuser.uid).subscribe( (doc) => {
          this.highScore = doc[0].highscore;
          this.score = doc[0].score;
          localStorage.setItem('docUser', JSON.stringify(doc[0]));
        })
      }
    });
  }

  ngOnInit() {
    this.gameInit();
  }

  gameButtonClick(mode: string) {
    console.log('click en ... '+mode);
  }

  gameInit() {
    this.semaforoState = 'red';
    let setTOgreen = setTimeout( ()=> {
      this.semaforoState = 'green';
    }, 3000)
  }


  
  logout() {
    this.authServ.logout().then( ()=> {
      this.router.navigateByUrl('');
    });
  }

  ngOnDestroy() {
    this.authStateSubs.unsubscribe();
    this.getCollectionSubs.unsubscribe();
  }
}
