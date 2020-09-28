import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 加载全局样式文件
import './styles/index.less'

Vue.config.productionTip = false

// 创建vue 根实例
new Vue({
  router, // 把router配置到根实例中
  render: h => h(App) //通过render方法将App根组件渲染到  #app入口节点中
}).$mount('#app')
