import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSelectListComponent } from './case-select-list.component';

describe('CaseSelectListComponent', () => {
  let component: CaseSelectListComponent;
  let fixture: ComponentFixture<CaseSelectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseSelectListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaseSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
