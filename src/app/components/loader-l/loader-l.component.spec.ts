import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderLComponent } from './loader-l.component';

describe('LoaderLComponent', () => {
  let component: LoaderLComponent;
  let fixture: ComponentFixture<LoaderLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
