import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdateBSheetComponent } from './user-update-b-sheet.component';

describe('UserUpdateBSheetComponent', () => {
  let component: UserUpdateBSheetComponent;
  let fixture: ComponentFixture<UserUpdateBSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUpdateBSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpdateBSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
