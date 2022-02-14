import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNumComponent } from './button-num.component';

describe('ButtonNumComponent', () => {
  let component: ButtonNumComponent;
  let fixture: ComponentFixture<ButtonNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonNumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
