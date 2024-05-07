import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuSelectListComponent } from './cpu-select-list.component';

describe('CpuSelectListComponent', () => {
  let component: CpuSelectListComponent;
  let fixture: ComponentFixture<CpuSelectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CpuSelectListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CpuSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
