import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWhyUsComponent } from './about-why-us.component';

describe('AboutWhyUsComponent', () => {
  let component: AboutWhyUsComponent;
  let fixture: ComponentFixture<AboutWhyUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutWhyUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutWhyUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
