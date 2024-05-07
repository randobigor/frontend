import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpuSelectListComponent } from './gpu-select-list.component';

describe('GpuSelectListComponent', () => {
  let component: GpuSelectListComponent;
  let fixture: ComponentFixture<GpuSelectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GpuSelectListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GpuSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
