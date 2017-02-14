import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { RESET } from './../../core/pet-tag.reducer';
import { PetTag } from './../../core/pet-tag.model';
import { AuthService } from './../../core/auth.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html'
})
export class CompleteComponent implements OnInit {
  tagState$: Observable<PetTag>
  petTag: PetTag;
  emptyTag: PetTag = {
    shape: '',
    font: 'sans-serif',
    text: '',
    clip: false,
    gems: false,
    complete: false
  };

  constructor(private store: Store<PetTag>, private auth: AuthService) {
    this.tagState$ = store.select('petTag');
  }

  ngOnInit() {
    this.tagState$.subscribe((state) => {
      this.petTag = state;
    });
  }

  newTag() {
    this.store.dispatch({
      type: RESET,
      payload: this.emptyTag
    });
  }

}
