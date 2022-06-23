import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-game',
  templateUrl: './header-game.component.html',
  styles: []
})
export class HeaderGameComponent implements OnInit {

  @Input() userName = '';

  constructor() {}

  ngOnInit(): void {
  }

}
