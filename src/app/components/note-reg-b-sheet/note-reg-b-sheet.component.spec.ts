import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteRegBSheetComponent } from './note-reg-b-sheet.component';

describe('NoteRegBSheetComponent', () => {
  let component: NoteRegBSheetComponent;
  let fixture: ComponentFixture<NoteRegBSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteRegBSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteRegBSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
