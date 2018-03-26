import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../email.service';
import { EmailRequest } from '../EmailRequest'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  sendButton: String = 'Send';
  warning: boolean;
  success: boolean;
  customerName: String;
  error: String;

  onSubmit(f: NgForm): void {
    if(f.valid == true) {
      this.customerName = f.value.customer;
      var request = new EmailRequest(f.value.customer, f.value.number, f.value.email, f.value.text);
      this.sendButton = 'Sending...';
      this.emailService.sendEmail(request).subscribe(
        (res: any) => {
          this.success = true;
        }, (error: any) => {
          console.log('error: ' + JSON.stringify(error));
          this.error = 'Sorry there was an error sending, please try again later or contact us by social media, phone, or email found on our About Us page.';
          this.success = false;
          this.sendButton = 'Send';
      });
    } else {
      this.error = 'Please complete the form.';
    }
  }

  validateNumber(number: String): boolean {
    return true;
  }

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

}
