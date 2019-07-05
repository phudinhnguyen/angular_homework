import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt4BestlaptopComponent } from './bt4-bestlaptop.component';

describe('Bt4BestlaptopComponent', () => {
  let component: Bt4BestlaptopComponent;
  let fixture: ComponentFixture<Bt4BestlaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt4BestlaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt4BestlaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
