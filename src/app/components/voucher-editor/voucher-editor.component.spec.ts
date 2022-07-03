import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherEditorComponent } from './voucher-editor.component';

describe('VoucherEditorComponent', () => {
  let component: VoucherEditorComponent;
  let fixture: ComponentFixture<VoucherEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoucherEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
