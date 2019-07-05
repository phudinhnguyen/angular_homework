import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt4Component } from './bt4.component';

describe('Bt4Component', () => {
  let component: Bt4Component;
  let fixture: ComponentFixture<Bt4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
