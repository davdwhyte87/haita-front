import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FchangepassComponent } from './fchangepass.component';

describe('FchangepassComponent', () => {
  let component: FchangepassComponent;
  let fixture: ComponentFixture<FchangepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FchangepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FchangepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
