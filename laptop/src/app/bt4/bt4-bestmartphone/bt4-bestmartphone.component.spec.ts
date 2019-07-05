import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt4BestmartphoneComponent } from './bt4-bestmartphone.component';

describe('Bt4BestmartphoneComponent', () => {
  let component: Bt4BestmartphoneComponent;
  let fixture: ComponentFixture<Bt4BestmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt4BestmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt4BestmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
