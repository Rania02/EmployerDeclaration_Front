import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Annex4Component } from './annex4.component';

describe('Annex4Component', () => {
  let component: Annex4Component;
  let fixture: ComponentFixture<Annex4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Annex4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Annex4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
