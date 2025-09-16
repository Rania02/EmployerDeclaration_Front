import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Annex6Component } from './annex6.component';

describe('Annex6Component', () => {
  let component: Annex6Component;
  let fixture: ComponentFixture<Annex6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Annex6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Annex6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
