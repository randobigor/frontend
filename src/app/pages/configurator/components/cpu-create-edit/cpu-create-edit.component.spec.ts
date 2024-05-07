import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuCreateEditComponent } from './cpu-create-edit.component';

describe('CpuCreateEditComponent', () => {
  let component: CpuCreateEditComponent;
  let fixture: ComponentFixture<CpuCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CpuCreateEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CpuCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
