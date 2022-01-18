import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteRegistrationComponent } from './note-registration.component';

describe('NoteRegistrationComponent', () => {
  let component: NoteRegistrationComponent;
  let fixture: ComponentFixture<NoteRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
