import Vue from 'vue';
import Homepage from '../../../src/views/Homepage';

describe('Homepage.vue', () => {
  it('should render component Homepage', () => {
    const Constructor = Vue.extend(Homepage);
    const vm = new Constructor().$mount();
    const element = vm.$el.querySelector('.echarts');
    expect(element).not.toBeNull();
  });
});
