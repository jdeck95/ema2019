import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileguidePage } from './mobileguide.page';

describe('MobileguidePage', () => {
  let component: MobileguidePage;
  let fixture: ComponentFixture<MobileguidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileguidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileguidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
