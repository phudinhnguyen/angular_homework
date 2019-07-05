import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt4BestlaptopitemComponent } from './bt4-bestlaptopitem.component';

describe('Bt4BestlaptopitemComponent', () => {
  let component: Bt4BestlaptopitemComponent;
  let fixture: ComponentFixture<Bt4BestlaptopitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt4BestlaptopitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt4BestlaptopitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
