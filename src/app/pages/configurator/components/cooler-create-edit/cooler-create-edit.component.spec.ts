import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolerCreateEditComponent } from './cooler-create-edit.component';

describe('CoolerCreateEditComponent', () => {
  let component: CoolerCreateEditComponent;
  let fixture: ComponentFixture<CoolerCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoolerCreateEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoolerCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
