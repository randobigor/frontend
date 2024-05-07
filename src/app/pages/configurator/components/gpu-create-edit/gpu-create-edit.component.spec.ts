import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpuCreateEditComponent } from './gpu-create-edit.component';

describe('GpuCreateEditComponent', () => {
  let component: GpuCreateEditComponent;
  let fixture: ComponentFixture<GpuCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GpuCreateEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GpuCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
