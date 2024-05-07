import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomSelectListComponent } from './rom-select-list.component';

describe('RomSelectListComponent', () => {
  let component: RomSelectListComponent;
  let fixture: ComponentFixture<RomSelectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RomSelectListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RomSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
