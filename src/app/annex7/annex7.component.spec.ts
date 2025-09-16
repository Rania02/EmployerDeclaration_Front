import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Annex7Component } from './annex7.component';

describe('Annex7Component', () => {
  let component: Annex7Component;
  let fixture: ComponentFixture<Annex7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Annex7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Annex7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
