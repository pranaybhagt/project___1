import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromPracticeComponent } from './from-practice.component';

describe('FromPracticeComponent', () => {
  let component: FromPracticeComponent;
  let fixture: ComponentFixture<FromPracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FromPracticeComponent]
    });
    fixture = TestBed.createComponent(FromPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
