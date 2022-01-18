import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteListLoadComponent } from './note-list-load.component';

describe('NoteListLoadComponent', () => {
  let component: NoteListLoadComponent;
  let fixture: ComponentFixture<NoteListLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteListLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteListLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
