import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFundComponent } from './transfer-fund.component';

describe('TransferFundComponent', () => {
  let component: TransferFundComponent;
  let fixture: ComponentFixture<TransferFundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferFundComponent]
    });
    fixture = TestBed.createComponent(TransferFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});