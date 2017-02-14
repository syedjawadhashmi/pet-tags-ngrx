import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PetTag } from './../core/pet-tag.model';

@Component({
  selector: 'app-tag-builder',
  templateUrl: './tag-builder.component.html'
})
export class TagBuilderComponent {
  tagState$: Observable<PetTag>
  petTag: PetTag;

  constructor(private store: Store<PetTag>) {
    this.tagState$ = store.select('petTag');
  }

  ngOnInit() {
    this.tagState$.subscribe((state: PetTag) => {
      this.petTag = state;
    });
  }

}
