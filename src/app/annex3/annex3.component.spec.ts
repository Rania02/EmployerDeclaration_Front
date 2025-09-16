import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Annex3Component } from './annex3.component';

describe('Annex3Component', () => {
  let component: Annex3Component;
  let fixture: ComponentFixture<Annex3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Annex3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Annex3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
