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

  timeOutToGreen: any;
  timeOutToRed: any;

  constructor(
    private authServ: AuthService,
    private router: Router
  ) {
    this.userName = this.authServ.userName;
  }

  /**
   * Function for user logout
   */
  logout() {
    this.authServ.logout().then( ()=> {
      this.router.navigateByUrl('');
    });
  }

  ngOnInit() {
    this.gameInit();
  }

  gameButtonClick(stepClk: string) {
    this.checkScores(stepClk);
    this.changeTimeToRed();
    this.changeStepExpected();
    this.saveScores();
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

  changeTimeToRed() {
    if (this.lightState === 'green') {
      this.fncControlGreenLight();
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
    this.timeOutToGreen = setTimeout(()=> {
      this.lightState = 'green';
      this.fncControlGreenLight();
    }, 3000);
  }

  fncControlGreenLight() {
    clearTimeout(this.timeOutToRed);
    this.timeOutToRed = setTimeout(()=> {
      this.gameInit();
    }, this.getTimeToRed())
  }

  getTimeToRed() {
    let random = Math.max(10000 - this.score * 100, 2000) + this.getRandom(-1500, 1500);
    console.log('time to red: '+random);
    return random;
  }

  /**
   * Function for get a random number between a max number and a min number
   * @param min > Min number
   * @param max > Max number
   * @returns   > Random number
   */
  getRandom(min: number, max: number) {
    let random = (Math.random() * (max - min)) + min;
    return random;
  }

  ngOnDestroy() {
    clearTimeout(this.timeOutToGreen);
    clearTimeout(this.timeOutToRed);
  }
}
