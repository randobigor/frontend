import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageCreateEditComponent } from './storage-create-edit.component';

describe('StorageCreateEditComponent', () => {
  let component: StorageCreateEditComponent;
  let fixture: ComponentFixture<StorageCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StorageCreateEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StorageCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
