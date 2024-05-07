import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamSelectListComponent } from './ram-select-list.component';

describe('RamSelectListComponent', () => {
  let component: RamSelectListComponent;
  let fixture: ComponentFixture<RamSelectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RamSelectListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RamSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
