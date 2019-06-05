import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBranchComponent } from './new.component';

describe('NewComponent', () => {
  let component: NewBranchComponent;
  let fixture: ComponentFixture<NewBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewBranchComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
