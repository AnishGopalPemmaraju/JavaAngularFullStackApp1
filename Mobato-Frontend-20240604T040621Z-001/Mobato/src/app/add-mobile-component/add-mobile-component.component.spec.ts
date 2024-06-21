import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMobileComponentComponent } from './add-mobile-component.component';

describe('AddMobileComponentComponent', () => {
  let component: AddMobileComponentComponent;
  let fixture: ComponentFixture<AddMobileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMobileComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMobileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
