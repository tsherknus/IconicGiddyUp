import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerMapsPage } from './passenger-maps.page';

describe('PassengerMapsPage', () => {
  let component: PassengerMapsPage;
  let fixture: ComponentFixture<PassengerMapsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerMapsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerMapsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
