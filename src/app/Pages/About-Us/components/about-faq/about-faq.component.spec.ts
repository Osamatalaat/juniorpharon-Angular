import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFaqComponent } from './about-faq.component';

describe('AboutFaqComponent', () => {
  let component: AboutFaqComponent;
  let fixture: ComponentFixture<AboutFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutFaqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
