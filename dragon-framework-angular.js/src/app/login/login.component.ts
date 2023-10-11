import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NzMessageService } from 'ng-zorro-antd';

import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private messageService: NzMessageService,
    private appService: AppService,
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  submitLoginForm() {
    Object.keys(this.loginForm.controls).forEach((key) => {
      this.loginForm.controls[key].markAsDirty();
      this.loginForm.controls[key].updateValueAndValidity();
    });
    if (this.loginForm.valid) {
      if ('administrator' === this.loginForm.value.username && '1234567890' === this.loginForm.value.password) {
        if (this.loginForm.value.remember) {
          this.messageService.info('记住密码！');
        }
        // 登录成功
        this.appService.setToken(this.loginForm.value.username);
        this.router.navigate(['']).then().catch().finally();
      } else {
        this.messageService.error('账号或密码错误');
      }
    }
  }

  forgetPassword() {
    this.messageService.warning('忘记密码？请联系管理员！');
  }

}
