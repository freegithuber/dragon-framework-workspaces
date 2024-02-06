declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}

declare module '*.vue' {
  interface Vue {
    $publicPath: string;
  }
}

declare module '*.vue' {

  import moment = require('moment');

  declare type Moment1 = (
    inp?: moment.MomentInput,
    format?: moment.MomentFormatSpecification,
    strict?: boolean,
  ) => moment.Moment;

  declare type Moment2 = (
    inp?: moment.MomentInput,
    format?: moment.MomentFormatSpecification,
    language?: string | boolean,
    strict?: boolean,
  ) => moment.Moment;

  interface Vue {
    $moment: Moment1 | Moment2;
  }

}

declare module 'vue-element-resize-detector' {
  import VueElementResizeDetector from 'vue-element-resize-detector';

  export default VueElementResizeDetector;
}
