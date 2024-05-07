import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryCreateEditComponent } from './memory-create-edit.component';

describe('MemoryCreateEditComponent', () => {
  let component: MemoryCreateEditComponent;
  let fixture: ComponentFixture<MemoryCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemoryCreateEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemoryCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
