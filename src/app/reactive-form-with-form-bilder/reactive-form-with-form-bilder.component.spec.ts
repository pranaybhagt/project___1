import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormWithFormBilderComponent } from './reactive-form-with-form-bilder.component';

describe('ReactiveFormWithFormBilderComponent', () => {
  let component: ReactiveFormWithFormBilderComponent;
  let fixture: ComponentFixture<ReactiveFormWithFormBilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormWithFormBilderComponent]
    });
    fixture = TestBed.createComponent(ReactiveFormWithFormBilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
