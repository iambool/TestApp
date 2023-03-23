import { useRef, useEffect } from 'react';
import * as echarts from 'echarts/core';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import {
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
} from 'echarts/components';
import {
  SVGRenderer,
  SvgChart as _SvgChart,
  SkiaChart as _SkiaChart,
} from '@wuba/react-native-echarts';
// 如果只安装了svg或skia中的一个，需要按如下方式单独引入
// import _SkiaChart, { SVGRenderer } from '@wuba/react-native-echarts/skiaChart';
// import _SvgChart, { SVGRenderer } from '@wuba/react-native-echarts/svgChart';
import { Dimensions } from 'react-native';

// 注册需要用到的组件
echarts.use([
  DataZoomComponent,
  SVGRenderer,
  BarChart,
  GridComponent,
  LegendComponent,
  ToolboxComponent,
  TooltipComponent,
  TitleComponent,
  PieChart,
  LineChart
]);

// 图表默认宽高
const CHART_WIDTH = Dimensions.get('screen').width; // 默认用手机屏幕宽度
const CHART_HEIGHT = 300;

const Chart = ({
  option,
  onInit,
  width = CHART_WIDTH,
  height = CHART_HEIGHT,
  ChartComponent,
}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;
    if (chartRef.current) {
      chart = echarts.init(chartRef.current, 'light', {
        renderer: 'svg',
        width,
        height,
      });
      option && chart.setOption(option);
      onInit?.(chart);
    }
    return () => chart?.dispose();
  }, [option]);
  return <ChartComponent ref={chartRef} />;
};

const SkiaChart = (props) => (
  <Chart {...props} ChartComponent={_SkiaChart} />
);
const SvgChart = (props) => (
  <Chart {...props} ChartComponent={_SvgChart} />
);
// 对外只暴露这哥俩就行
export { SkiaChart, SvgChart };
