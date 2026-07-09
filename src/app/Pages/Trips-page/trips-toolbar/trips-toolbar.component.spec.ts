import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsToolbarComponent } from './trips-toolbar.component';

describe('TripsToolbarComponent', () => {
  let component: TripsToolbarComponent;
  let fixture: ComponentFixture<TripsToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripsToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
