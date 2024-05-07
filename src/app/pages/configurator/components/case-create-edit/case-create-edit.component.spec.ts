import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseCreateEditComponent } from './case-create-edit.component';

describe('CaseCreateEditComponent', () => {
  let component: CaseCreateEditComponent;
  let fixture: ComponentFixture<CaseCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseCreateEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaseCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
