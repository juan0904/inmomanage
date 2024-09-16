import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropAddEditComponent } from './prop-add-edit.component';

describe('PropAddEditComponent', () => {
  let component: PropAddEditComponent;
  let fixture: ComponentFixture<PropAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
