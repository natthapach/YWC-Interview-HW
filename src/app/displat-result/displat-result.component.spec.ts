import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplatResultComponent } from './displat-result.component';

describe('DisplatResultComponent', () => {
  let component: DisplatResultComponent;
  let fixture: ComponentFixture<DisplatResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplatResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplatResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
