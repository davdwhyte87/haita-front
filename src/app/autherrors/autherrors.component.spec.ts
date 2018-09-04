import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutherrorsComponent } from './autherrors.component';

describe('AutherrorsComponent', () => {
  let component: AutherrorsComponent;
  let fixture: ComponentFixture<AutherrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutherrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutherrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
