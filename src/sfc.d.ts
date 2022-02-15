import Vue from 'vue';
declare module '*.vue' {
  export default Vue;
}

declare module 'vue/types/vue' {
  // eslint-disable-next-line no-undef
  type Hooks = App.AppInstance & Page.PageInstance;
  // 3. 声明为 Vue 补充的东西
  interface Vue extends Hooks {
    /**
     * 组件类型
     */
    mpType?: string;
  }
}
