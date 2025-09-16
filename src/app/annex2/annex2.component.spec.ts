import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Annex2Component } from './annex2.component';

describe('Annex2Component', () => {
  let component: Annex2Component;
  let fixture: ComponentFixture<Annex2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Annex2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Annex2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
