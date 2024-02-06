<template>
  <div class="homepage eui-box">
    <el-carousel>
      <el-carousel-item>
        <div ref="echarts" class="echarts box"></div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="eui-button-box">
          <!-- 普通按钮 -->
          <div class="eui-row">
            <span class="eui-button">
              <span class="icon"></span>
            </span>
            <span class="eui-button" @click="onLogout">
              <span class="icon"></span>
            </span>
            <span class="eui-button">
              <span class="icon"></span>
            </span>
          </div>
          <!-- 单选按钮 -->
          <div class="eui-row">
            <label class="eui-radio">
              <input type="radio" name="radio_name"/>
              <span class="radio">
                <span class="icon"></span>
              </span>
            </label>
            <label class="eui-radio">
              <input type="radio" name="radio_name" checked/>
              <span class="radio">
                <span class="icon"></span>
              </span>
            </label>
            <label class="eui-radio">
              <input type="radio" name="radio_name"/>
              <span class="radio">
                <span class="icon"></span>
              </span>
            </label>
          </div>
          <!-- 复选按钮 -->
          <div class="eui-row">
            <label class="eui-checkbox">
              <input type="checkbox" name="checkbox_name" checked/>
              <span class="checkbox">
                <span class="icon"></span>
              </span>
            </label>
            <label class="eui-checkbox">
              <input type="checkbox" name="checkbox_name"/>
              <span class="checkbox">
                <span class="icon"></span>
              </span>
            </label>
            <label class="eui-checkbox">
              <input type="checkbox" name="checkbox_name" checked/>
              <span class="checkbox">
                <span class="icon"></span>
              </span>
            </label>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import TokenHelper from '@/core/TokenHelper';

export default {
  name: 'homepage',
  components: {},
  data() {
    return {
      echartsInstance: null,
    };
  },
  methods: {
    onLogout() {
      TokenHelper.removeToken();
    },
  },
  mounted() {
    this.echartsInstance = this.$echarts.init(this.$refs.echarts);
    const chartOption = {
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
    // 重要！页面渲染完成后再绘制图表！！！
    this.$nextTick(() => {
      this.echartsInstance.setOption(chartOption);
      this.echartsInstance.resize();
    });
  },
  beforeDestroy() {
    this.echartsInstance.dispose();
  },
};
</script>

<style scoped lang="less">
.homepage {
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  padding: 10px;
  background: url("@{PUBLIC_PATH}images/background.jpg") no-repeat center center;
  background-size: 100% 100%;
  /deep/ .el-carousel, /deep/ .el-carousel__container, /deep/ .el-carousel__item {
    width: 100%; height: 100%;
  }
}
.echarts {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 255, 0.2);
  border-radius: 18px;
}
/* 按钮组样式单 开始 */
.eui-button-box {
  width: 100%;
  height: 100%;
  border-radius: 18px;
  background-color: #EFEEEE;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
}
.eui-row, .eui-radio, .eui-checkbox {
  display: contents;
}
.eui-radio input[type='radio'], .eui-checkbox input[type='checkbox'] {
  display: none;
}
.eui-button, .eui-radio .radio, .eui-checkbox .checkbox {
  width: 200px;
  height: 200px;
  border-radius: 40px;
  background-color: #EDEDED;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 18px 18px 28px rgba(0, 0, 0, 0.1), -18px -18px 28px rgba(255, 255, 255, 1);
  transition: box-shadow 0.2s ease-out;
}
.eui-button .icon, .eui-radio .radio .icon, .eui-checkbox .checkbox .icon {
  width: 50%;
  height: 50%;
  background-image: url('../assets/images/powerbutton.svg');
  background-size: 100% 100%;
}
.eui-button:active,
.eui-radio input[type='radio']:checked + .radio,
.eui-checkbox input[type='checkbox']:checked + .checkbox {
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.1),
  0 0 0 rgba(255, 255, 255, 1),
  inset 18px 18px 28px rgba(0, 0, 0, 0.1),
    inset -18px -18px 28px rgba(255, 255, 255, 1);
  transition: box-shadow 0.2s ease-out;
}
.eui-button:active .icon,
.eui-radio input[type='radio']:checked + .radio .icon,
.eui-checkbox input[type='checkbox']:checked + .checkbox .icon {
  background: none #409EFF;
  -webkit-mask-image: url('../assets/images/powerbutton.svg');
  mask-image: url('../assets/images/powerbutton.svg');
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}
/* 按钮组样式单 结束 */
</style>
