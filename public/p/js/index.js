/**
 * Created by Administrator on 2018/1/11.
 */
$(function(){

  // 初始化  echart   传入放表格的容器
  var myChart = echarts.init(document.getElementById('cart-left'));

  //如果是真实接口：
  var data = [
    {name: "1月", num: 333},
    {name: "2月", num: 200},
    {name: "3月", num: 300},
    {name: "4月", num: 200},
    {name: "5月", num: 100},
    {name: "6月", num: 500},
  ];

  //利用map方法 map方法返回一个数组
      var arr1 =  data.map(function(e){
          return e.name
       })
      var  arr2 = data.map(function(e){
         return e.num;
      })
    console.log(arr1);
    console.log(arr2);
  // 指定图标的配置项和数据
  var option = {
    title: {
      text: '2017年注册人数'
    },
    tooltip: {},
    legend: {
      data:['人数']
    },
    xAxis: {
      data:arr1
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data:arr2
    }]
  };

  // 使用刚指定的配置项和数据显示图表。 使用配置项显示图表
  myChart.setOption(option);


  // 显示饼状图  初始化一个表格
  var myChart2= echarts.init(document.getElementById('cart-right'));
  // 配置数据和
  option2 = {
    title : {
      text: '热门品牌销售',
      subtext: '2017年6月',
      x:'center'
    },
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['耐克', '阿迪', '新百伦', '迪卡侬', '阿迪王']
    },
    series : [
      {
        name: '访问来源',
        type: 'pie',
        radius : '55%',
        center: ['50%', '60%'],
        data: [
          {value: 335, name: '耐克'},
          {value: 310, name: '阿迪'},
          {value: 234, name: '新百伦'},
          {value: 135, name: '迪卡侬'},
          {value: 1548, name: '阿迪王'}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  myChart2.setOption(option2);
})