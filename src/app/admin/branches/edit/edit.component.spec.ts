import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchEditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: BranchEditComponent;
  let fixture: ComponentFixture<BranchEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BranchEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
