import { useRef, useEffect } from 'react';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent, LegendComponent } from 'echarts/components';
import { SVGRenderer, SkiaChart, SvgChart } from 'wrn-echarts';
import { Text, View } from 'react-native';

// 注册需要用到的组件，BarChart-柱状图 LegendComponent-图例
echarts.use([SVGRenderer, BarChart, LegendComponent, GridComponent]);

// 生成随机基础数据
function getData() {
  const data = [];
  for (let i = 0; i < 5; ++i) {
    data.push(Math.round(Math.random() * 200));
  }
  return data;
}

// 初次渲染以后的随机数据生成
function run(myChart, data) {
  for (var i = 0; i < data.length; ++i) {
    if (Math.random() > 0.9) {
      data[i] += Math.round(Math.random() * 2000);
    } else {
      data[i] += Math.round(Math.random() * 200);
    }
  }
  // 新数据再更新到图表上
  myChart.setOption({
    series: [
      {
        type: 'bar',
        data,
      },
    ],
  });
}

// 柱状图的默认配置
function getDefaultOption(data) {
  return {
    xAxis: {
      max: 'dataMax',
    },
    yAxis: {
      type: 'category',
      data: ['A', 'B', 'C', 'D', 'E'],
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: 2, // 只放出最长的前三个柱图
    },
    series: [
      {
        realtimeSort: true,
        name: 'X',
        type: 'bar',
        data,
        label: {
          show: true,
          position: 'right',
          valueAnimation: true,
        },
      },
    ],
    legend: {
      // 显示图例
      show: true,
    },
    animationDuration: 0, // 这几个是动画的配置
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear',
  };
}

export default () => {
  const skiaRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    // Skia模式
    const skiaChartData = getData(); // 生成图表柱状图数据
      let skiaChart;
      let skiaInter;
    if (skiaRef.current) {
      skiaChart = echarts.init(skiaRef.current, 'light', {
        renderer: 'svg',
        width: 300,
        height: 300,
      });
      skiaChart.setOption(getDefaultOption(skiaChartData));
      setTimeout(function () {
        run(skiaChart, skiaChartData);
      }, 0);
      skiaInter = setInterval(function () {
        run(skiaChart, skiaChartData);
      }, 3000);
    }

    // Svg模式
    const svgChartData = getData();
    let svgChart;
    let svgInter;
    if (svgRef.current) {
      svgChart = echarts.init(svgRef.current, 'light', {
        renderer: 'svg',
        width: 300,
        height: 300,
      });
      svgChart.setOption(getDefaultOption(svgChartData));
      setTimeout(function () {
        run(svgChart, svgChartData);
      }, 0);
      svgInter = setInterval(function () {
        run(svgChart, svgChartData);
      }, 3000);
    }

    return () => {
      skiaChart?.dispose();
      svgChart?.dispose();
      // 定时器得清理掉，不然退出页面后还会运行
      clearInterval(skiaInter);
      clearInterval(svgInter);
    };
  }, []);
  return (
    <View>
      <Text>skia如下</Text>
      <SkiaChart ref={skiaRef} />
      <Text>svg如下</Text>
      <SvgChart ref={svgRef} />
    </View>
  );
};
