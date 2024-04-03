import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutroBannerComponent } from './outro-banner.component';

describe('OutroBannerComponent', () => {
  let component: OutroBannerComponent;
  let fixture: ComponentFixture<OutroBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutroBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutroBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
