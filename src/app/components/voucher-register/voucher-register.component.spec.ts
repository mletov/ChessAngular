import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherRegisterComponent } from './voucher-register.component';

describe('VoucherRegisterComponent', () => {
  let component: VoucherRegisterComponent;
  let fixture: ComponentFixture<VoucherRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoucherRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
