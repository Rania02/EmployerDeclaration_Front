import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Annex5Component } from './annex5.component';

describe('Annex5Component', () => {
  let component: Annex5Component;
  let fixture: ComponentFixture<Annex5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Annex5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Annex5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
