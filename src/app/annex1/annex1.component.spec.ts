import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Annex1Component } from './annex1.component';

describe('Annex1Component', () => {
  let component: Annex1Component;
  let fixture: ComponentFixture<Annex1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Annex1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Annex1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
