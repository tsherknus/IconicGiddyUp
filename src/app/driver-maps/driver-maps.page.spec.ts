import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverMapsPage } from './driver-maps.page';

describe('DriverMapsPage', () => {
  let component: DriverMapsPage;
  let fixture: ComponentFixture<DriverMapsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverMapsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverMapsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
