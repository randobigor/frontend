import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolerSelectListComponent } from './cooler-select-list.component';

describe('CoolerSelectListComponent', () => {
  let component: CoolerSelectListComponent;
  let fixture: ComponentFixture<CoolerSelectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoolerSelectListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoolerSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
