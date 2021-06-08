import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidDashBoardComponent } from './covid-dash-board.component';

describe('CovidDashBoardComponent', () => {
  let component: CovidDashBoardComponent;
  let fixture: ComponentFixture<CovidDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
