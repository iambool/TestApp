export const defaultActual = [
  {
    title: '销售额',
    num: 4600,
    unit: '万元',
  },
  {
    title: '订单数',
    num: 700,
    unit: '万单',
  },
  {
    title: '用户数',
    num: 600,
    unit: '万人',
  },
];

// 折线图mock数据
export const getLineData = [
  {
    name: '新增订单',
    type: 'line',
    showSymbol: false,
    lineStyle: {
      color: '#205ec8',
    },
    data: [820, 932, 901, 934, 1290, 1330, 1320, 998, 970, 1100, 1302, 1297],
  },
  {
    name: '退单',
    type: 'line',
    showSymbol: false,
    lineStyle: {
      color: '#75ba2e',
    },
    data: [320, 332, 301, 334, 390, 330, 320, 312, 327, 320, 319, 330],
  },
];

// 折线图配置
export const lineOption = {
  color: ['#205ec8', '#75ba2e'],
  title: {
    text: '单位（笔）',
    textStyle: {
      color: '#fff',
      fontSize: 12,
    },
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: '#4b7bc0',
    borderWidth: 0,
    textStyle: {
      color: '#fff',
    },
  },
  legend: {
    left: 80,
    data: ['新增订单', '退单'],
    textStyle: {
      color: '#fff',
      fontSize: 12,
    },
    icon: 'roundRect',
    itemHeight: 2, // 粗细
    itemWidth: 12, // 线的长度
  },
  grid: {
    top: '10%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
    ],
    // axisLine: {
    //   lineStyle: {
    //     color: '#fff',
    //   },
    // },
    axisLabel: {
      color: '#fff',
    },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      color: '#fff',
    },
    splitLine: {
      lineStyle: {
        color: ['#666'],
      },
    },
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 50,
    },
  ],
  series: [
    {
      name: '新增订单',
      type: 'line',
      showSymbol: false,
      data: [],
    },
    {
      name: '退单',
      type: 'line',
      showSymbol: false,
      data: [],
    },
  ],
};

// 用户分析
export const userAnaly = {
  color: ['#205ec8', '#75ba2e'],
  title: {
    text: '单位（人）',
    textStyle: {
      color: '#fff',
      fontSize: 12,
    },
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: '#4b7bc0',
    borderWidth: 0,
    textStyle: {
      color: '#fff',
    },
  },
  legend: {
    left: 80,
    data: ['新增用户', '累计用户'],
    textStyle: {
      color: '#fff',
      fontSize: 12,
    },
    icon: 'rect',
  },
  grid: {
    top: '10%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      data: [
        '一月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
        '七月',
        '八月',
        '九月',
        '十月',
        '十一月',
        '十二月',
      ],
      axisLabel: {
        color: '#fff',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        color: '#fff',
      },
      splitLine: {
        lineStyle: {
          color: ['#666'],
        },
      },
    },
  ],
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 50,
    },
  ],
  series: [
    {
      name: '新增用户',
      type: 'bar',
      data: [800, 900, 860, 590, 740, 980, 880, 940, 910, 930, 990, 830],
    },
    {
      name: '累计用户',
      type: 'bar',
      data: [
        1200, 1400, 1560, 1690, 1740, 1880, 1980, 2040, 2110, 2230, 2390, 2430,
      ],
    },
  ],
};

// 销售额
export const salesVolume = {
  color: ['#f6ae5a'],
  title: {
    text: '单位（万元）',
    textStyle: {
      color: '#fff',
      fontSize: 12,
    },
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: '#4b7bc0',
    borderWidth: 0,
    textStyle: {
      color: '#fff',
    },
  },
  grid: {
    top: '10%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: ['女装', '男装', '童装', '鞋帽'],
      axisLabel: {
        color: '#fff',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        color: '#fff',
      },
      splitLine: {
        lineStyle: {
          color: ['#666'],
        },
      },
    },
  ],
  series: [
    {
      type: 'bar',
      label: {
        show: true,
        color: '#fff',
        position: 'top',
      },
      barMaxWidth: 32,
      data: [900, 600, 860, 590],
    },
  ],
};

// 销售状态
export const salesStatus = {
  grid: {
    top: '10%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  series: [
    {
      name: '订单',
      type: 'pie',
      radius: ['20%', '60%'], // 饼图大小控制
      // avoidLabelOverlap: false,
      labelLine: {
        show: true,
      },
      label: {
        color: '#fff',
        show: true,
        formatter: '{b}\n({d}%)', //自定义显示格式(b:name, c:value, d:百分比)
      },
      data: [
        { value: 2580, name: '已发订单' },
        { value: 1048, name: '异常订单' },
        { value: 735, name: '未发订单' },
        { value: 484, name: '退单' },
      ],
    },
  ],
};
