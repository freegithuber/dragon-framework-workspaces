<template>
  <div class="homepage box">
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
            <span class="eui-button">
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
export default {
  name: 'Homepage',
  components: {},
  data() {
    return {
      echartsInstance: null,
    };
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

<style scoped lang="scss">
.homepage {
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  padding: 10px;
  background: url("../assets/images/background.jpg") no-repeat center center;
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
  background-image: url('data:image/svg+xml;charset=utf-8,<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="128" height="128"><path d="M652.899 189.266c-16.036-7.058-34.761 0.22-41.82 16.258-7.059 16.038 0.221 34.761 16.258 41.819 104.649 46.06 172.27 149.682 172.27 263.991 0 77-29.986 149.392-84.434 203.839s-126.839 84.434-203.839 84.434-149.393-29.986-203.84-84.434c-54.448-54.447-84.433-126.839-84.433-203.839 0-114.963 68.159-218.821 173.642-264.591 16.075-6.975 23.451-25.659 16.477-41.733-6.975-16.075-25.662-23.452-41.734-16.477-128.688 55.837-211.839 182.544-211.839 322.8 0 47.469 9.304 93.535 27.653 136.917 17.717 41.887 43.073 79.499 75.365 111.791 32.292 32.291 69.903 57.647 111.791 75.364 43.383 18.35 89.449 27.653 136.918 27.653 47.468 0 93.535-9.304 136.917-27.653 41.888-17.717 79.499-43.073 111.791-75.364 32.291-32.292 57.647-69.904 75.364-111.791 18.35-43.383 27.653-89.448 27.653-136.917 0.001-139.458-82.493-265.877-210.16-322.067z"></path><path d="M512 479.517c17.522 0 31.727-14.205 31.727-31.727V128.228c0-17.522-14.204-31.727-31.727-31.727s-31.727 14.205-31.727 31.727V447.79c0 17.522 14.205 31.727 31.727 31.727z"></path></svg>');
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
  -webkit-mask-image: url('data:image/svg+xml;charset=utf-8,<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="128" height="128"><path d="M652.899 189.266c-16.036-7.058-34.761 0.22-41.82 16.258-7.059 16.038 0.221 34.761 16.258 41.819 104.649 46.06 172.27 149.682 172.27 263.991 0 77-29.986 149.392-84.434 203.839s-126.839 84.434-203.839 84.434-149.393-29.986-203.84-84.434c-54.448-54.447-84.433-126.839-84.433-203.839 0-114.963 68.159-218.821 173.642-264.591 16.075-6.975 23.451-25.659 16.477-41.733-6.975-16.075-25.662-23.452-41.734-16.477-128.688 55.837-211.839 182.544-211.839 322.8 0 47.469 9.304 93.535 27.653 136.917 17.717 41.887 43.073 79.499 75.365 111.791 32.292 32.291 69.903 57.647 111.791 75.364 43.383 18.35 89.449 27.653 136.918 27.653 47.468 0 93.535-9.304 136.917-27.653 41.888-17.717 79.499-43.073 111.791-75.364 32.291-32.292 57.647-69.904 75.364-111.791 18.35-43.383 27.653-89.448 27.653-136.917 0.001-139.458-82.493-265.877-210.16-322.067z"></path><path d="M512 479.517c17.522 0 31.727-14.205 31.727-31.727V128.228c0-17.522-14.204-31.727-31.727-31.727s-31.727 14.205-31.727 31.727V447.79c0 17.522 14.205 31.727 31.727 31.727z"></path></svg>');
  mask-image: url('data:image/svg+xml;charset=utf-8,<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="128" height="128"><path d="M652.899 189.266c-16.036-7.058-34.761 0.22-41.82 16.258-7.059 16.038 0.221 34.761 16.258 41.819 104.649 46.06 172.27 149.682 172.27 263.991 0 77-29.986 149.392-84.434 203.839s-126.839 84.434-203.839 84.434-149.393-29.986-203.84-84.434c-54.448-54.447-84.433-126.839-84.433-203.839 0-114.963 68.159-218.821 173.642-264.591 16.075-6.975 23.451-25.659 16.477-41.733-6.975-16.075-25.662-23.452-41.734-16.477-128.688 55.837-211.839 182.544-211.839 322.8 0 47.469 9.304 93.535 27.653 136.917 17.717 41.887 43.073 79.499 75.365 111.791 32.292 32.291 69.903 57.647 111.791 75.364 43.383 18.35 89.449 27.653 136.918 27.653 47.468 0 93.535-9.304 136.917-27.653 41.888-17.717 79.499-43.073 111.791-75.364 32.291-32.292 57.647-69.904 75.364-111.791 18.35-43.383 27.653-89.448 27.653-136.917 0.001-139.458-82.493-265.877-210.16-322.067z"></path><path d="M512 479.517c17.522 0 31.727-14.205 31.727-31.727V128.228c0-17.522-14.204-31.727-31.727-31.727s-31.727 14.205-31.727 31.727V447.79c0 17.522 14.205 31.727 31.727 31.727z"></path></svg>');
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}
/* 按钮组样式单 结束 */
</style>
