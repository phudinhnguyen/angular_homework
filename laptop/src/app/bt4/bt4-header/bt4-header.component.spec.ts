import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt4HeaderComponent } from './bt4-header.component';

describe('Bt4HeaderComponent', () => {
  let component: Bt4HeaderComponent;
  let fixture: ComponentFixture<Bt4HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt4HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt4HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
