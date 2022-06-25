import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {

  userName: string = '';
  highScore: number = 0;
  score: number = 0;

  lightState: string = 'red';


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
    this.lightState = 'red';
    let setTOgreen = setTimeout( ()=> {
      this.lightState = 'green';
      let setTOgreen2 = setTimeout(()=> {
        this.gameInit();
      }, this.getTimeGreen())
    }, 3000)
  }

  getTimeGreen() {
    let random = Math.max(10000 - this.score * 100, 2000) + this.getRandom(-1500, 1500);
    console.log('time green: '+random);
    return 2000;
  }
  getRandom(min: number, max: number) {
    let random = (Math.random() * (max - min)) + min;
    console.log('random: '+random);
    return random;
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
