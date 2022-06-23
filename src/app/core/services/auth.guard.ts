import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (
    private authServ: AuthService
  ) {}

  canActivate(): Observable<boolean> {
    return this.authServ.isAuth();
  }
  
}
