import { Injectable } from '@angular/core';

import { Scores } from '../models/user.interface';
import { UserScoresMap } from '../models/user.model';

const PREF_KEY_LOCALSTORAGE = 'GAME_RLGL_';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userName: string = '';
  score: number = 0;
  highScore: number = 0;

  constructor() {}

  isAuth(): boolean {
    let userScores: string = '';
    let currentUser: string | null = localStorage.getItem(PREF_KEY_LOCALSTORAGE + 'currentUser');
    if (currentUser) {
      this.userName = currentUser;
      return !!this.getUserScores(currentUser);
    }
    return false;
  }

  loginRegisterUser(userName: string) {
    let userScores = this.getUserScores(userName);
    if (!userScores) {
      this.createUserScores(userName);
    }
    return new Promise((resolve) => {
      this.userName = userName;
      localStorage.setItem(PREF_KEY_LOCALSTORAGE + 'currentUser', userName);
      resolve('');
    });
  }

  /**
   * Function for get userScores
   * @param userName > User name
   * @returns        > User scores
   */
  getUserScores(userName: string) {
    let userScores = localStorage.getItem(PREF_KEY_LOCALSTORAGE + userName);
    if (userScores) {
      this.setScores(JSON.parse(userScores));
    }
    return userScores;
  }

  /**
   * Function for set in the class the user's scores
   * @param jsonScores > Json with the scores
   */
  setScores(jsonScores: Scores) {
    this.score = jsonScores.score;
    this.highScore = jsonScores.highscore;
  }

  /**
   * Function for create score map for new user
   * @param userName > User name
   */
  createUserScores(userName: string) {
    const newUser = new UserScoresMap(0, 0);
    localStorage.setItem(PREF_KEY_LOCALSTORAGE + userName, JSON.stringify({...newUser}));
    this.getUserScores(userName);
  }

  /**
   * Function for logout
   * @returns Promise resolved
   */
  logout() {
    return new Promise((resolve) => {
      localStorage.removeItem(PREF_KEY_LOCALSTORAGE + 'currentUser');
      resolve('');
    });
  }

  saveScores(scoresObj: Scores) {
    localStorage.setItem('GAME_RLGL_'+this.userName, JSON.stringify(scoresObj));
  }
}
