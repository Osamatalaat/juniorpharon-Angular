import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsBreadcrumbComponent } from './trips-breadcrumb.component';

describe('TripsBreadcrumbComponent', () => {
  let component: TripsBreadcrumbComponent;
  let fixture: ComponentFixture<TripsBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripsBreadcrumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripsBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
