import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediopagoComponent } from './mediopago.component';

describe('MediopagoComponent', () => {
  let component: MediopagoComponent;
  let fixture: ComponentFixture<MediopagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediopagoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediopagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
