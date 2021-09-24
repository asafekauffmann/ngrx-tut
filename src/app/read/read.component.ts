import * as TutorialActions from './../actions/tutorial.actions';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import { AppState } from './../app.state';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  // define a Propertie
  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) { 
    this.tutorials = store.select('tutorial');  // this tutorial comes from AppModule 
  }

  ngOnInit(): void {
  }

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index))
  }

}
