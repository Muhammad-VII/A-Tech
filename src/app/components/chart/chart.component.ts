import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  afterNextRender,
  inject,
} from '@angular/core';
import type { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { isPlatformBrowser } from '@angular/common';
import { SsrService } from '../../services/ssr.service';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
  providers: [provideEcharts()],
})
export class ChartComponent {
  public ssrService = inject(SsrService);
  options: EChartsOption = {
    tooltip: {
      trigger: 'item',
      align: 'right',
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '5%',
      containLabel: true,
    },
    xAxis: {
      boundaryGap: false,
      data: [
        'ديسمبر',
        'نوفمبر',
        'أكتوبر',
        'سبتمبر',
        'أغسطس',
        'يوليو',
        'يونيه',
        'ماير',
        'إبريل',
        'مارس',
        'فبراير',
        'يناير',
      ],
    },
    yAxis: {},
    series: [
      {
        data: [200, 300, 400, 200, 400, 300, 400, 500, 400, 300, 400, 300],
        type: 'line',
        smooth: true,
        lineStyle: {
          color: '#8A74F9',
          width: 3,
        },
        itemStyle: {
          color: '#8A74F9',
        },
        areaStyle: {
          color: '#8A74F9',
          opacity: 0.6,
        },
      },
    ],
  };
}
