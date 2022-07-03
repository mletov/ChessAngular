import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-voucher-editor',
  templateUrl: './voucher-editor.component.html',
  styleUrls: ['./voucher-editor.component.css']
})
export class VoucherEditorComponent implements OnInit {

  voucherForm = this.fb.group({
    customerName: ['', Validators.required],
    customerPhone: ['', Validators.required],
    reservations: this.fb.array([
      this.fb.control('')
    ])
  });

  get reservations() {
    return this.voucherForm.get('reservations') as FormArray;
  }

  addReservation() {
    this.reservations.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.voucherForm.value);
  }

  ngOnInit(): void {



  }

}
