import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent{
  authForm: FormGroup = this.fb.group({
    user: ['', [ Validators.required ] ]
  });

  constructor(
    private fb: FormBuilder,
    private authServ: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authForm.reset();
  }

  loginOrRegister() {
    if (this.authForm.status === "VALID") {
      this.authServ.loginUser(this.authForm.value.user)
      .then( (credentials) => {
        //.log('credenciales login', credentials);
        this.router.navigateByUrl('/game');
      })
      .catch( (err)=> {
        //console.log('error login>', err);
        if (err) {
          this.registerUser();
        }
      })
    }
  }

  registerUser() {
    this.authServ.createUser(this.authForm.value.user)
    .then( (credentials) => {
      //console.log('credenciales register>', credentials);
      this.router.navigateByUrl('/game');
    })
    .catch( (err)=> {
      //console.log('error register', err);
    })
  }
}
