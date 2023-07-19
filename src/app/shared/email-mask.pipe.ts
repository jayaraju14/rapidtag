import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailMask'
})
export class EmailMaskPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;
    
    const emailParts = value.split('@');
    const username = emailParts[0];
    const maskedUsername = username.substring(2).replace(/./g, '*');
    const domain = emailParts[1];

    return `${username.substring(0, 2)}${maskedUsername}@${domain}`;
  }
}
