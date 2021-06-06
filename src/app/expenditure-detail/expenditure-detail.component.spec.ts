import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureDetailComponent } from './Expenditure-detail.component';

describe('ExpenditureDetailComponent', () => {
  let component: ExpenditureDetailComponent;
  let fixture: ComponentFixture<ExpenditureDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenditureDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenditureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
