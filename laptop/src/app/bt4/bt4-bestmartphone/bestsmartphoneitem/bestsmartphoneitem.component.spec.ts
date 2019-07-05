import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsmartphoneitemComponent } from './bestsmartphoneitem.component';

describe('BestsmartphoneitemComponent', () => {
  let component: BestsmartphoneitemComponent;
  let fixture: ComponentFixture<BestsmartphoneitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestsmartphoneitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestsmartphoneitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
