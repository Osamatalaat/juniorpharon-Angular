import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDestinationsComponent } from './about-destinations.component';

describe('AboutDestinationsComponent', () => {
  let component: AboutDestinationsComponent;
  let fixture: ComponentFixture<AboutDestinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutDestinationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
