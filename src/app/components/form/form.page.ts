import { Component } from '@angular/core';
// import { Collection } from '../models/collection.model';
import { Router } from '@angular/router';
// import { Game } from '../models/game.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage {

  selectedForm: 'collection' | 'game' = 'collection';

  ngOnInit() {
  }

}
