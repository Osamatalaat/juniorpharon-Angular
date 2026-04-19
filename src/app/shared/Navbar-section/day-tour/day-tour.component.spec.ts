/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DayTourComponent } from './day-tour.component';

describe('DayTourComponent', () => {
  let component: DayTourComponent;
  let fixture: ComponentFixture<DayTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
