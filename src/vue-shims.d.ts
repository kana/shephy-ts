declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module '*.css' {
  import Vue from 'vue'
  interface WithRender {
    <V extends Vue>(options: Vue.ComponentOptions<V>): Vue.ComponentOptions<V>
    <V extends typeof Vue>(component: V): V
  }
  const withRender: WithRender
  export = withRender
}
