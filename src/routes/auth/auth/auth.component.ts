import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public sent: boolean = false;
  public disabled: boolean = false;
  public phone: string = '';
  public code: string = '';
  public length: number = 4;

  constructor(private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  clear(): void {
    this.code = '';
    this.sent = false;
  }

  submit(): void {
    this.sent ? this.verify() : this.send();
  }

  async send(): Promise<void> {
    if (this.phone.length == 0) this.toast('شماره موبایل را وارد کنید !');
    else if (this.phone.length != 11) this.toast('شماره موبایل باید ۱۱ رقمی باشد !');
    else {
      // this.disabled = true;
      this.sent = true;
    }
  }

  async verify(): Promise<void> {
    if (this.code.length == 0) this.toast('کد تایید را وارد کنید !');
    else if (this.code.length != this.length) this.toast('کد تایید باید ۴ رقمی باشد !');
    else {
      // this.disabled = true;
      this.router.navigate(['/panel']);
    }
  }

  toast(message: string): void {
    this.snackbar.open(message, 'باشه', { duration: 3000, direction: 'rtl' });
  }

}
