import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
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
  stepExpected: string = 'left';

  authStateSubs!: Subscription;
  getCollectionSubs!: Subscription;

  constructor(
    private authServ: AuthService,
    private router: Router
  ) {
    this.userName = this.authServ.userName;
  }

  ngOnInit() {
    this.gameInit();
  }

  gameButtonClick(stepClk: string) {
    this.checkScores(stepClk);
    this.changeStepExpected();
    this.saveScores();
    console.log('click en ... '+stepClk);
  }

  /**
   * Function to control score and highscore
   * @param stepClk > Button clicked (left | right)
   */
  checkScores(stepClk: string) {
    if (this.lightState === 'red') {
      this.score = 0;
    } else if (this.stepExpected == stepClk) {
      this.score++;
    } else if (this.score > 0) {
      this.score--;
    }
    if (this.highScore < this.score) {
      this.highScore = this.score;
    }
  }

  /**
   * Function for change the step expected
   */
  changeStepExpected() {
    if (this.stepExpected === 'left') {
      this.stepExpected = 'right';
    } else {
      this.stepExpected = 'left';
    }
  }

  /**
   * Function for save scores into localstorage
   */
  saveScores(){
    this.authServ.saveScores({
      'highscore': this.highScore,
      'score': this.score
    });
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
    
  }
}
