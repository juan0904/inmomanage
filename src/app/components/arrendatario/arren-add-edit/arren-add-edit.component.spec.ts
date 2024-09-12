import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrenAddEditComponent } from './arren-add-edit.component';

describe('ArrenAddEditComponent', () => {
  let component: ArrenAddEditComponent;
  let fixture: ComponentFixture<ArrenAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrenAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrenAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
