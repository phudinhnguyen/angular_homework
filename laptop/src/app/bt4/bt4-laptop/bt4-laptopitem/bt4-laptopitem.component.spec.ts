import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt4LaptopitemComponent } from './bt4-laptopitem.component';

describe('Bt4LaptopitemComponent', () => {
  let component: Bt4LaptopitemComponent;
  let fixture: ComponentFixture<Bt4LaptopitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt4LaptopitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt4LaptopitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
