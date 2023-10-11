import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { ShareModule } from '../share/share.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

describe('MainComponent', () => {

  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [MainComponent],
      imports: [
        CommonModule,
        NoopAnimationsModule,
        RouterTestingModule,
        MainRoutingModule,
        ShareModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
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
