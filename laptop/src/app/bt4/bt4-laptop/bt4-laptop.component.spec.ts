import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt4LaptopComponent } from './bt4-laptop.component';

describe('Bt4LaptopComponent', () => {
  let component: Bt4LaptopComponent;
  let fixture: ComponentFixture<Bt4LaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt4LaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt4LaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
