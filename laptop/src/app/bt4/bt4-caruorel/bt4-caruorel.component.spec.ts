import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt4CaruorelComponent } from './bt4-caruorel.component';

describe('Bt4CaruorelComponent', () => {
  let component: Bt4CaruorelComponent;
  let fixture: ComponentFixture<Bt4CaruorelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt4CaruorelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt4CaruorelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
