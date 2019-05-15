import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaumplanungPage } from './raumplanung.page';

describe('RaumplanungPage', () => {
  let component: RaumplanungPage;
  let fixture: ComponentFixture<RaumplanungPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaumplanungPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaumplanungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
