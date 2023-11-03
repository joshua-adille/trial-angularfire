import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneCheckboxComponent } from './done-checkbox.component';

describe('DoneCheckboxComponent', () => {
  let component: DoneCheckboxComponent;
  let fixture: ComponentFixture<DoneCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DoneCheckboxComponent]
    });
    fixture = TestBed.createComponent(DoneCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
