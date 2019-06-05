import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowersLoanComponent } from './borrowers-loan.component';

describe('BorrowersLoanComponent', () => {
  let component: BorrowersLoanComponent;
  let fixture: ComponentFixture<BorrowersLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BorrowersLoanComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowersLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
