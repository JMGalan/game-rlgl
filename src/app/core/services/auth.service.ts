import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { userDoc } from '../models/usuario.interface';

import { Usuario } from '../models/usuario.model';

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

  getCollection(uid: string): Observable<userDoc[]|any> {
    return this.firestore.collection(`${uid}`).valueChanges()
  }

  logout() {
    return this.auth.signOut();
  }
}
