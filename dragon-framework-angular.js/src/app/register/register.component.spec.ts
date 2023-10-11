import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { ShareModule } from '../share/share.module';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {

  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        CommonModule,
        NoopAnimationsModule,
        RouterTestingModule,
        RegisterRoutingModule,
        ShareModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
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
