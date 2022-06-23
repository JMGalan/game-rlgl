import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { userDoc } from '../models/usuario.interface';

import { Usuario } from '../models/usuario.model';
import { HighScoreComponent } from '../../shared/components/high-score/high-score.component';
import { hideLoading } from '../../../../../practicaMto2/src/app/store/actions/loading.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public auth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  isAuth() {
    return this.auth.authState.pipe(
      map( fbUser => fbUser != null )
    );
  }

  createUser(nombre: string) {
    let email = nombre+'@aaa.com';
    return this.auth.createUserWithEmailAndPassword(email, '123456')
            .then( ({user}) => {
              if (user && user.email) {
                const newUser = new Usuario(user.uid, user.email.split('@')[0], 0, 0);
                return this.firestore.doc(`${user.uid}/usuario/`).set({...newUser});
              }
            })
            .catch( err => console.error );
  }

  loginUser(nombre: string) {
    let email = nombre+'@aaa.com';
    return this.auth.signInWithEmailAndPassword(email, '123456');
  }

  logout() {
    return this.auth.signOut();
  }

  getCollection(uid: string): Observable<userDoc[]|any> {
    return this.firestore.collection(`${uid}`).valueChanges()
  }

  getHighScore(): number {
    let highScore = 0;
    try {
      highScore = JSON.parse(localStorage.getItem('docUser') || '{}').highScore;
      if (!highScore) {
        highScore = 0;
      }
    } catch (err) {
      highScore = 0;
    }
    return highScore;
  }

  getScore(): number {
    let score = 0;
    try {
      score = JSON.parse(localStorage.getItem('docUser') || '{}').score;
      if (!score) {
        score = 0;
      }
    } catch (err) {
      score = 0;
    }
    return score;
  }
}
