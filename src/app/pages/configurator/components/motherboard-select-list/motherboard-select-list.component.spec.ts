import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherboardSelectListComponent } from './motherboard-select-list.component';

describe('MotherboardSelectListComponent', () => {
  let component: MotherboardSelectListComponent;
  let fixture: ComponentFixture<MotherboardSelectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotherboardSelectListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotherboardSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
