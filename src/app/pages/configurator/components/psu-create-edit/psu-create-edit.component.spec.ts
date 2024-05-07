import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsuCreateEditComponent } from './psu-create-edit.component';

describe('PsuCreateEditComponent', () => {
  let component: PsuCreateEditComponent;
  let fixture: ComponentFixture<PsuCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PsuCreateEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PsuCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
