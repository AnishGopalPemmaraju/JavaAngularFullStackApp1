import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMobileComponentComponent } from './view-mobile-component.component';

describe('ViewMobileComponentComponent', () => {
  let component: ViewMobileComponentComponent;
  let fixture: ComponentFixture<ViewMobileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMobileComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewMobileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
