import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurModalComponent } from './our-modal.component';

describe('OurModalComponent', () => {
  let component: OurModalComponent;
  let fixture: ComponentFixture<OurModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurModalComponent]
    });
    fixture = TestBed.createComponent(OurModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
