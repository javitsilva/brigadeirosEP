import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  valid: boolean;
  success: boolean;
  customerName: String;
  error: String;

  onSubmit(f: NgForm): void {
    this.valid = f.valid;

    if(this.valid == true) {
      this.customerName = f.value.customer;
      this.success = true;
    } else {
      this.error = 'Please complete the form.';
    }
  }

  validateNumber(number: String): boolean {
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
