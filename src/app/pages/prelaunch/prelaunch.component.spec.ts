import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelaunchComponent } from './prelaunch.component';

describe('PrelaunchComponent', () => {
  let component: PrelaunchComponent;
  let fixture: ComponentFixture<PrelaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrelaunchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrelaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
