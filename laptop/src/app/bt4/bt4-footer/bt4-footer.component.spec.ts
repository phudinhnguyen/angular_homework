import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt4FooterComponent } from './bt4-footer.component';

describe('Bt4FooterComponent', () => {
  let component: Bt4FooterComponent;
  let fixture: ComponentFixture<Bt4FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt4FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt4FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
