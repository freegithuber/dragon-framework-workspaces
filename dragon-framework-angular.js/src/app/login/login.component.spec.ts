import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { ShareModule } from '../share/share.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        CommonModule,
        NoopAnimationsModule,
        RouterTestingModule,
        LoginRoutingModule,
        ShareModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    // 在每个测试用例后执行清理操作
  });

  it('should create', () => {
    return expect(component).toBeTruthy();
  });

});
