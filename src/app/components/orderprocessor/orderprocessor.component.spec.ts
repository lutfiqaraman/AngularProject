import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderprocessorComponent } from './orderprocessor.component';

describe('OrderprocessorComponent', () => {
  let component: OrderprocessorComponent;
  let fixture: ComponentFixture<OrderprocessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderprocessorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderprocessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
