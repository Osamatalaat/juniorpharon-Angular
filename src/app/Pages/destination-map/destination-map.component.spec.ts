/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DestinationMapComponent } from './destination-map.component';

describe('DestinationMapComponent', () => {
  let component: DestinationMapComponent;
  let fixture: ComponentFixture<DestinationMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
