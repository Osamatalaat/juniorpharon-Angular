/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FaqContactComponent } from './faq-contact.component';

describe('FaqContactComponent', () => {
  let component: FaqContactComponent;
  let fixture: ComponentFixture<FaqContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
