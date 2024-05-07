import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherboardCreateEditComponent } from './motherboard-create-edit.component';

describe('MotherboardCreateEditComponent', () => {
  let component: MotherboardCreateEditComponent;
  let fixture: ComponentFixture<MotherboardCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotherboardCreateEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotherboardCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
