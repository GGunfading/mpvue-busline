/*
 * @Author: erye 
 * @Date: 2018-05-04 10:42:41 
 * @Last Modified by:   erye 
 * @Last Modified time: 2018-05-04 10:42:41 
 */
import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    "navigationBarTitleText": "公交-路线",
    "enablePullDownRefresh": false,
    "backgroundTextStyle": "dark"
  }
}
