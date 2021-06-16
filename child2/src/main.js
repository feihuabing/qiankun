import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$EventBus = new Vue()
function render(props = {}) {
  const { container } = props
  new Vue({
    router,
    render: h => h(App),
    $props:props
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// webpack打包公共文件路径
if (window.__POWERED_BY_QIANKUN__) {
  window.__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
// 独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
// 生命周期
export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  setTimeout(()=>{
    Vue.prototype.$EventBus.$emit('setType',props.type)
  },200)
  // storeTest(props);
  render(props)
}
export async function unmount() {
  console.log('[vue] vue app unmount')
}