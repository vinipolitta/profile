import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroBannerComponent } from './primeiro-banner.component';

describe('PrimeiroBannerComponent', () => {
  let component: PrimeiroBannerComponent;
  let fixture: ComponentFixture<PrimeiroBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimeiroBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimeiroBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
