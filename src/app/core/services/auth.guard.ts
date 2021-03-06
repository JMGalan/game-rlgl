import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor ( private authServ: AuthService ) {}

  canLoad(): Observable<boolean> {
    return of(this.authServ.isAuth());
  }
}
