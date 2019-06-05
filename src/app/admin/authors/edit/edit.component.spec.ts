import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorEditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: AuthorEditComponent;
  let fixture: ComponentFixture<AuthorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
