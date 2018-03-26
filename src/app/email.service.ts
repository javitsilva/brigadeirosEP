import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { EmailRequest } from './EmailRequest'

@Injectable()
export class EmailService {

  readonly EMAIL_URL: String = 'https://api.emailjs.com/api/v1.0/email/send';

  public sendEmail(request: EmailRequest): Observable<any> {
    var req = {
      service_id: 'javitsilva@gmail.com',
      template_id: 'standard',
      user_id: 'user_6hc5nyxx16p1uaQ2uzA6G',
      template_params: {
        name: request.name,
        number: request.number,
        email: request.email,
        message: request.message
      }
    };
    return this.http.post(this.EMAIL_URL.toString(), req, {responseType: 'text'});
  }

  constructor(private http: HttpClient) {}

}
