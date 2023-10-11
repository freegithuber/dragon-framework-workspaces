import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { NzMessageService } from 'ng-zorro-antd';

import { AppService } from '../../service/app.service';

import { environment } from '../../environments/environment';

import * as echarts from 'echarts';

import ECharts = echarts.ECharts;
import EChartOption = echarts.EChartOption;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, OnDestroy {

  echartsInstance: ECharts;

  echartsOption: EChartOption;

  constructor(
    private router: Router,
    private http: HttpClient,
    private messageService: NzMessageService,
    private appService: AppService,
  ) {
  }

  ngOnInit() {
    this.echartsOption = {
      xAxis: {
        type: 'category',
        axisLabel: {
          fontSize: 18,
        },
        axisLine: {
          lineStyle: {
            color: '#FFF',
          },
        },
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          fontSize: 18,
        },
        axisLine: {
          lineStyle: {
            color: '#FFF',
          },
        },
      },
      series: [
        {
          type: 'line',
          smooth: true,
          symbolSize: 10,
          data: [480, 680, 360, 580, 420, 740, 300],
        },
        {
          type: 'line',
          smooth: true,
          symbolSize: 10,
          data: [380, 480, 300, 520, 280, 420, 180],
        },
      ],
    };
    this.http.get(environment.dragonFramework + '/welcome').subscribe((value: any) => {
        this.messageService.success(value);
      }, (error: any) => {
        this.messageService.error(error.statusText);
      }, () => {
        this.messageService.info('complete');
      },
    );
  }

  echartsInit(echartsInstance: ECharts) {
    this.echartsInstance = echartsInstance;
  }

  echartsClick(echartsData) {
    this.messageService.success(echartsData.name + '：' + echartsData.value);
  }

  doLogout() {
    this.appService.removeToken();
  }

  ngOnDestroy() {
    this.echartsInstance.dispose();
  }

}
