import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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
      this.authServ.loginRegisterUser(this.authForm.value.user).then(() => {
        this.router.navigateByUrl('/game');
      });
    }
  }
}
