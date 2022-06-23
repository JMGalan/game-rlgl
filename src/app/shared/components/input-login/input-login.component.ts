import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-login',
  templateUrl: './input-login.component.html',
  styles: [
  ]
})
export class InputLoginComponent implements OnInit {

  @Output() onKeyEnter : EventEmitter<string> = new EventEmitter();

  authForm: FormGroup = this.fb.group({
    user: ['', [ Validators.required ] ]
  });

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.authForm.reset();
  }

  login() {
    console.log(this.authForm.value);
  }

}
