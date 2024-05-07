import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsuSelectListComponent } from './psu-select-list.component';

describe('PsuSelectListComponent', () => {
  let component: PsuSelectListComponent;
  let fixture: ComponentFixture<PsuSelectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PsuSelectListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PsuSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
